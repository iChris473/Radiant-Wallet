const UserModel = require('./models/User.model');
const jwt = require('jsonwebtoken');
const axios = require('axios');

const ethers = require('ethers');

exports.createWallet = async (req, res) => {
    
    const wallet = ethers.Wallet.createRandom();

    try {

        const user = new UserModel({
            mnemonic: wallet.mnemonic.phrase
        })

        await user.save();

        const token = jwt.sign({ id: user._id }, process.env.JWTSECRET, { expiresIn: '9999y' });

        return res
            .cookie("token", token, { httpOnly: true })
            .send(user);

    } catch (error) {
        return res.status(401).json('Oop! An error occured');
    }

}

exports.importWallet = async (req, res) => {

    const { mnemonic } = req.body;

    try {

        const user = await UserModel.findOne({ mnemonic });

        if(!user) return res.status(404).json('Invalid Wallet');
    
        const token = jwt.sign({id: user._id}, process.env.JWTSECRET, {expiresIn: '9999y'});
      
        return res
        .cookie("token", token, {httpOnly: true})
        .send(user);

    } catch (error) {
        return res.status(401).json('Oops! An error occured');
    }

}

exports.getWallet = async (req, res) => {

    try {
        
        const user = await UserModel.findById(req.userId);

        if(!user) return res.status(404).json('Wallet not found');

        const total = user.ethAmount + user.bnbAmount + user.xrpAmount + user.usdtAmount + user.btcAmount;

        return res.json({...user, total});

    } catch (error) {
        return res.status(401).json('Oops! An error occured');
    }

}

exports.updateWallet = async (req, res) => {

    if(req.body.mnemonic){
        delete req.body.mnemonic;
    }

    try {
        
        const user = await UserModel.findById(req.userId);

        user.set(req.body);

        await user.save();

        return res.json(user);

    } catch (error) {
        return res.status(401).json('Oops! An error occured')
    }

}

exports.isLoggedIn = async (req, res) => {
 
    const token = req.cookies?.token;

    if(!token) return res.json(false);

    const userinfo = jwt.verify(token, process.env.JWTSECRET);

    if(!userinfo) return res.json(false);

    const user = await UserModel.findById(userinfo?.id);

    if(!user) return res.json(false);

    return res.json(true);

}

exports.logOut = async (req, res) => {
    return res.cookie("token", "", {
        httpOnly: true,
        expires: new Date(0)
    }).send()
}

exports.sendCrypto = async (req, res) => {

    try {
        
        const { tokenType, amount, address } = req.body;

        const user = await UserModel.findById(req.userId);

        if(pareseInt(amount) > user[tokenType+'Amount']) return res.status(401).json(`Insufficient ${tokenType}`);

        return res.json(`${amount}$ worth of ${tokenType} will be sent to ${address}`);

    } catch (error) {
        return res.status(401).json('Oops! An error occured')
    }

}

exports.swapCrypto = async (req, res) => {
    
    try {

        const { from, to } = req.body;

        const amount = parseInt(req.body.amount);

        const user = await UserModel.findById(req.userId);

        const cryptoResponse = await axios.get(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${from},${to}&tsyms=USD&api_key=4465b316c0b525fe0b44dc1dfb2560417c6fe19450c1cbda37a95d2c90c87c22`);

        const fromPrice = cryptoResponse.data[from.toUpperCase()].USD;

        const toPrice = cryptoResponse.data[to.toUpperCase()].USD;

        if((user[from.toLowerCase()+'Amount']) < amount) 
        return res.status(400).json(`Sorry, you don't have enough ${from.toUpperCase()} to convert`);

        const newUser = {};
        
        newUser[from.toLowerCase()] = Math.max(0, parseFloat((user[from.toLowerCase()] - (amount / fromPrice)).toFixed(3)));
        
        newUser[from.toLowerCase()+'Amount'] = Math.max(0, user[from.toLowerCase()+'Amount'] - amount);

        newUser[to.toLowerCase()] = parseFloat(user[to.toLowerCase()] + (amount / toPrice)).toFixed(8);
        
        newUser[to.toLowerCase()+'Amount'] = user[to.toLowerCase()+'Amount'] + amount;

        user.set(newUser);
        await user.save();

        return res.json(user);

    } catch (error) {
        return res.status(401).json('Oops! An error occured')
    }

}

exports.depositCrypto = async (req, res) => {
    
    try {
        
        const { token, amount } = req.body;

        const response = await axios.get(`https://min-api.cryptocompare.com/data/price?fsym=${token}&tsyms=USD&api_key=4465b316c0b525fe0b44dc1dfb2560417c6fe19450c1cbda37a95d2c90c87c22`);

        const USDamount = response.data.USD;
        console.log(USDamount)

        const user = await UserModel.findById(req.userId);

        const newUser = {};

        newUser[token.toLowerCase()] = user[token.toLowerCase()] + (parseInt(amount) / USDamount);
        newUser[token.toLowerCase()+'Amount'] = user[token.toLowerCase()+'Amount'] + parseInt(amount);

        user.set(newUser);

        await user.save();
        
        return res.json(user);

    } catch (error) {
        return res.status(401).json('Oops An error occured')
    }

}
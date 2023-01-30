const UserModel = require('./models/User.model');
const jwt = require('jsonwebtoken');

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

        return res.json(user);

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
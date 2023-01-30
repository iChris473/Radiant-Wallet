const UserModel = require('./models/User.model');
const jwt = require('jsonwebtoken');

exports.validateToken = async (req, res, next) => {

    const token = req.cookies?.token;
    
    if (!token) return res.status(401).json('Unauthorized');

    const userinfo = jwt.verify(token, process.env.JWTSECRET);

    if(!userinfo) return res
    .cookie("token", "", {
        httpOnly: true,
        expires: new Date(0)
    })
    .status(401)
    .json("Unauthorized")

    const user = await UserModel.findById(userinfo?.id);

    if (!user) return res
    .cookie("token", "", {
        httpOnly: true,
        expires: new Date(0)
    })
    .status(401)
    .json("Unauthorized");

    req.userId = user._id;

    next();

}
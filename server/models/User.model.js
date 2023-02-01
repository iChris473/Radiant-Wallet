

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    mnemonic: {
        type: String,
        required: true,
    },
    btc: {
        type: Number,
        default: 0
    },
    btcAmount: {
        type: Number,
        default: 0
    },
    usdt: {
        type: Number,
        default: 0
    },
    usdtAmount: {
        type: Number,
        default: 0
    },
    xrp: {
        type: Number,
        default: 0
    },
    xrpAmount: {
        type: Number,
        default: 0
    },
    bnb: {
        type: Number,
        default: 0
    },
    bnbAmount: {
        type: Number,
        default: 0
    },
    eth: {
        type: Number,
        default: 0
    },
    ethAmount: {
        type: Number,
        default: 0
    },

}, {timestamps: true})



module.exports = mongoose.model("Users", UserSchema);
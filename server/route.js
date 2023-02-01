const router = require("express").Router();
const { validateToken } = require("./auth.route");
const { createWallet, importWallet, getWallet, updateWallet, isLoggedIn, logOut, depositCrypto, swapCrypto } = require("./user.controller");

// create user
router.post("/register", createWallet);
// import wallet
router.post('/import', importWallet);
// get wallet
router.get('/wallet', validateToken, getWallet);
// update wallet
router.put('/wallet', validateToken, updateWallet);
// check if user is logged in
router.get('/isloggedin', isLoggedIn);
// logout user 
router.get('/logout', logOut);
// DEPOSIT CRYPTO
router.post('/deposit', validateToken, depositCrypto);
// SWAP CRYPTO
router.post('/swap', validateToken, swapCrypto)

module.exports = router; 
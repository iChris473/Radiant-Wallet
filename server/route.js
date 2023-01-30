const router = require("express").Router();
const { validateToken } = require("./auth.route");
const { createWallet, importWallet, getWallet, updateWallet, isLoggedIn, logOut } = require("./user.controller");

// create user
router.post("/register", createWallet);
// import wallet
router.post('/import', importWallet);
// get wallet
router.get('/wallet', validateToken, getWallet);
// update wallet
router.put('/wallet', validateToken, updateWallet);
// check if user is logged in
router.get('/isloggedin', validateToken, isLoggedIn);
// logout user 
router.get('/logout', logOut);

module.exports = router; 
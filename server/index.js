require('dotenv').config()
const express = require('express')
const app = express()
require("./models/db");
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.enable('trust proxy');

app.use(function(request, response, next) {

    if (process.env.NODE_ENV != 'development' && !request.secure) {
       return response.redirect("https://" + request.headers.host + request.url);
    }

    next();
});

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());


const router = require("./route");

app.use("/api", router);


const port = process.env.PORT || 1300;

app.get("/", (req, res) => res.send(`Radiant Wallet is Running`));

app.listen(port, () => console.log(`Backend running on ${port}`));


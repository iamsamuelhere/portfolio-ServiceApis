const router = require("express").Router();
const cors = require("cors")

const {sendMail} = require("../controllers/mailControllers");

var corsOptions = {
    origin: 'https://iamsamuelhere.github.io/portfolio/',
    optionsSuccessStatus: 200
}

router.post("/",cors(corsOptions),sendMail);

module.exports = router;
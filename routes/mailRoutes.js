const router = require("express").Router();
// const cors = require("cors")

const {sendMail} = require("../controllers/mailControllers");

// var corsOptions = {
//     origin: [process.env.PROD_SITE, process.env.DEV_SITE],
//     optionsSuccessStatus: 200
// }

// router.post("/",cors(corsOptions),sendMail);

router.post("/",sendMail);


module.exports = router;
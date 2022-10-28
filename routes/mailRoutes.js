const router = require("express").Router();

const {sendMail} = require("../controllers/mailControllers");

router.post("/",sendMail);

module.exports = router;
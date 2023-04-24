const express = require("express");
const router = express.Router();
const { sendMail } = require("../controllers/mails");
router.route("/").post(sendMail);
module.exports = router;

const sendMailService = require("../services/mailService");
const bodyFormat = require("../utils/bodyFormats");

module.exports.sendMail = async (req, res) => {
  try {
    const [autoReplyBody, notifyMailBody] = bodyFormat(req.body);
    await sendMailService(autoReplyBody);
    await sendMailService(notifyMailBody);
    return res.json({ "status": 201, "message": "sent successfully" });
  } catch (error) {
    console.log(error);
    return res.json({ "status": 403, "message": error });
  }
}
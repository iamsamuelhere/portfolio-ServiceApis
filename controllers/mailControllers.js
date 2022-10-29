const sendMailService = require("../services/mailService");

module.exports.sendMail = async (req, res) => {
  try {
    const { name, emailId, message } = req.body;

    const autoReplyBody = {
      to: emailId,
      from: process.env.PUBLIC_MAILID,
      subject: `Hi ${name}! from Samuel👋`,
      html: `<h3>Hi ${name}, Glad to be connecting with you!</h3>
             <p>This is an Automated Reply mail.</p>
             <p>Will go through your message submitted on my portfolio and will reply back within 24hours (I promise 😉)</p>
             Thanks & Take care, <br/>
             Samuel`
    }

    const notifyMailBody = {
      to: process.env.PERSONAL_MAILID,
      from: process.env.PUBLIC_MAILID,
      subject: `Portfolio Visitor Message: From ${name}`,
      html: `<p>Sender Name: ${name}</p>
      <p>Sender Email: ${emailId} </p>
      <p>Message: ${message}</p>
      <p>Date Time: ${new Date().toLocaleString("en-GB")}</p>`
    }

    await sendMailService(autoReplyBody); 
    await sendMailService(notifyMailBody);
    return res.json({ "status": 202, "message": "sent successfully" });
  } catch (error) {
    console.log(error);
    return res.json({ "status": 403, "message": error });
  }
}
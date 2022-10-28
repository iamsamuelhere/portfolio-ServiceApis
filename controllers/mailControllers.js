const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

module.exports.sendMail = async(req,res)=>{
    const msg = {
        to: req.body.to,
        from: process.env.FROM_MAIL_ID,
        subject: req.body.subject,
        text: 'test text',
        html: '<strong>sample</strong>',
      }
      try {
       await sgMail.send(msg);
       return res.json({"status":202,"message":"sent successfully"});
      } catch (error) {
         console.log(error);
       return res.json({"status":403,"message":error});
      }
    }
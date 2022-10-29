const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendMailService=async(body)=>{
    try{
        await sgMail.send(body);
    }
    catch (error){
        console.log(`ERROR - sendMailService(): ${error} `)
        throw error;
    }
}

module.exports = sendMailService;
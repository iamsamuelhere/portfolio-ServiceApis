const bodyFormat = (body) => {
    const { name, emailId, message, time } = body;
    return [
        {
            to: emailId,
            from: process.env.PUBLIC_MAILID,
            subject: `Hi ${name}! from Samuel👋`,
            html: `<h3>Hi ${name}, Glad to be connecting with you!</h3>
                   <p>This is an Automated Reply mail.</p>
                   <p>Will go through your message submitted on my portfolio and will reply back within 24hours (I promise 😉)</p>
                   Thanks & Take care, <br/>
                   Samuel`
        },
        {
            to: process.env.PERSONAL_MAILID,
            from: process.env.PUBLIC_MAILID,
            subject: `Portfolio Visitor Message: From ${name}`,
            html: `<p>Sender Name: ${name}</p>
            <p>Sender Email: ${emailId} </p>
            <p>Message: ${message}</p>
            <p>Sent On: ${time}</p>`
        }
    ]
}

module.exports= bodyFormat;
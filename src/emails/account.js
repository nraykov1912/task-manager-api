const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)


//send does return a promise
const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'nikolayraykov1912@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you ge along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'nikolayraykov1912@gmail.com',    
        subject: 'Sorry to say goodbye!',
        text: `Goodby, ${name}. What could we have done better?`
    })
}

module.exports= {
    sendWelcomeEmail,
    sendCancelationEmail
}
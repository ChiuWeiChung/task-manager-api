const sgMail = require('@sendgrid/mail');






sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email,name)=>{
    sgMail.send({
        to:email,
        from:'a0928202539@gmail.com',
        subject:'THanks for joining in!',
        text:`Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
    
}

const sendGoodbyeEmail = (email,name)=>{
    sgMail.send({
        to:email,
        from:'a0928202539@gmail.com',
        subject:'Goodbye~',
        text:`Goodbye, ${name}. Please let me know why you are leaving the service.`
    })
}

module.exports =  {
    sendWelcomeEmail,
    sendGoodbyeEmail
}
import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
    host: 'mail.tornipartesosorio.com',
    port: 465,
    auth: {
        user: 'fe@tornipartesosorio.com',
        pass: 'Col2130.'
    }
});


export const mailOptions = {
    from: "fe@tornipartesosorio.com",
    to: "dimematthe@gmail.com",
    subject: "Ha iniciado sesión",
    html: "<h1>Sign in</h1>",
    atachments: [{
        path: 'nodemailer.png'
    }]
}

export const mailOptionsLogOut = {
    from: "Servidor node",
    to: "carmela.emard16@ethereal.email",
    subject: "Ha cerrado sesión",
    html: "<h1>Log out sucess</h1>"
}


const functions = require('firebase-functions');
const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'rodrigomweb@gmail.com',
        pass: '8wM29lPlQjFSC7mTU'
    }
}) 

exports.contactEmail = functions.database.ref('marketing-digital-2c3b5/{id}').onCreate((snap, context) => {
    const name = snap.val().name
    const email = snap.val().email
    const cel = snap.val().cel
    const message = snap.val().message
    const marca = snap.val().marca

    return sendContactEmail(name, email, cel, marca, message)
})

const sendContactEmail = (name, email, cel, marca, message) => {
    return transport.sendMail({
        from: name,
        to: 'ab.rodrigom@gmail.com',
        subject: 'Mensaje de contacto Web',
        html:`
        <h1>Datos de Interesado</h1>
        <p><strong>Nombre:</strong>${name}</p>
        <p><strong>Cel:</strong> ${cel}</p>
        <p><strong>Cel:</strong> ${marca}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
        <p><strong>Email:</strong> ${email}</p>
    `
    })
    .then(r => r)
    .catch(e => e)
}

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();


// Body Parser Middleware

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// This is the route for check if server is running
app.get('/', (req, res) => {
    res.send('Server is running');
});

app.post('/send', (req, res) => {
    const output = `
    <p> you have a new contact request</p>
    <h3> Contact Details </h3>
    <ul>
    <li> Name: ${req.body.name} </li>
    <li> Company: ${req.body.company} </li>
    <li> Email: ${req.body.email} </li>
    <li> Phone: ${req.body.phone} </li>
    </ul>
    <h3> Message</h3>
    <p> ${req.body.message} </p>
    `;

    let transporter = nodemailer.createTransport({
        host: "in-v3.mailjet.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: '62f606ed055e2617b616b5a97d6693d8', // generated ethereal user
            pass: '26216d9fd4c15461e38be06db4541dea' // generated ethereal password
        }
    });

    // send mail with defined transport object
    let mailOptions = {
        from: '"Yasir Arafat" <******************>', // Same as host name
        to: "xyz@gmail.com", // list of receivers
        subject: "Node Contact Request ✔", // Subject line
        text: "Hello world?", // plain text body
        html: output // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    });
    res.send('Email send successfully');

});
const port = 5000;
app.listen(port, () => console.log(`Server is running on ${port}`));

# Send-notification-with-nodemailer

With the help of nodemailer we'll send the notification on gmail.

## Installation

First clone the project like -
```bash
git clone 'add repository uri'
```
# start
```bash
npm install
```
```bash
npm start
```
# Here we are using the these packages
Here we are using the nodemailer.
let transporter = nodemailer.createTransport({
        host: "********.com", you can put your own host name id
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: '******************' // generated ethereal user
          pass: '******************' // generated ethereal password
        }
      });

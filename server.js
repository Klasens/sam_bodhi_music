const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_PASS;

const port = 3000;
const PORT = process.env.PORT || port;

app.listen(PORT, () =>
  console.log(`Server app is starting at http://localhost:${PORT}`)
);

app.post('/contact', (req, res) => {
  const smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASS,
    },
  });
  const mailOpts = {
    from: 'robfklasen@gmail.com', // This is ignored by Gmail
    to: 'robfklasen@gmail.com',
    subject: 'New message from contact form at tylerkrys.ca',
    text: `${req.body.firstName} ${req.body.lastName} (${req.body.email}) says: ${req.body.subject} ${req.body.message}`,
  };
  smtpTrans.sendMail(mailOpts, (error, response) => {
    if (error) {
      res.render('contact-failure'); // Show a page indicating failure
    } else {
      res.render('contact-success'); // Show a page indicating success
    }
  });
});

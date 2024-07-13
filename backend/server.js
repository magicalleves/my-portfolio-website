const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5001; // Change the port number here

app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'eva.gadzhieva@gmail.com', // replace with your email
      pass: 'sfet ldao qlpq diud',  // replace with your generated app password
    },
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'eva.gadzhieva@gmail.com',
    subject: 'Message from Portfolio',
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.post('/send', (req, res) => {
  const { name, email, message } = req.body;

  // Create a transporter using Gmail SMTP
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'aadarsh112010@gmail.com', // Replace with your Gmail address
      pass: 'Aadarsh@91', // Replace with your Gmail password or app password
    },
  });

  // Define email options
  let mailOptions = {
    from: email, // Sender's email
    to: 'banadab330@marchub.com', // Your Gmail address to receive the email
    subject: `New message from ${name}`,
    text: `You have a new message from ${name} (${email}):\n\n${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent successfully');
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

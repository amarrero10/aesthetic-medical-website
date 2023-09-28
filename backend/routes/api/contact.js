const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

router.post("/", (req, res) => {
  const { name, email, message, phone } = req.body;

  // // Create a transporter using your custom domain SMTP settings
  // let transporter = nodemailer.createTransport({
  //   host: "your-custom-domain-smtp-server.com",
  //   port: 587, // or the port provided by your email hosting service
  //   secure: false, // Set to true if your email hosting service requires SSL/TLS
  //   auth: {
  //     user: "your-email@your-custom-domain.com", // Your custom domain email address
  //     pass: "your-email-password", // Your custom domain email password
  //   },
  // });

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "albert.marrero10@gmail.com",
      pass: "bkpdatdbdkleqxey",
    },
  });

  const mailOptions = {
    to: "albert.marrero10@gmail.com",
    subject: "New Enquiry",
    html: `
      <html>
        <body>
          <h1>New Enquiry</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
          <p><strong>Phone:</strong> ${phone}</p>
        </body>
      </html>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send("Error sending email");
    } else {
      res.send("Email sent successfully");
    }
  });
});

module.exports = router;

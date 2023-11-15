const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

router.post("/", (req, res) => {
  const { name, email, message, phone } = req.body;

  // Create a transporter using your custom domain SMTP settings
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
    to: ["aalhafi@fmpm.com", "shassan@fmpm.com", "Cbrenner@fmpm.com"],
    bcc: "albert.marrero10@gmail.com",
    subject: "New Enquiry - Spring Health and Wellness",
    html: `
      <html>
        <body>
          <h1>Form Submission:</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
          <p><strong>Phone:</strong> ${phone}</p>
        </body>
      </html>
    `,
  };

  const mailOptions2 = {
    to: email,
    subject: "Your Friends At Spring Health and Wellness",
    html: `
    <html>
      <body>
        <p>Thank you for reaching out to us. We are looking forward to helping you in your weight loss goals. A member of our team will be in touch to answer your questions and help schedule a consultation. In the meantime, you may refer to our website to explore our services.</p>
        <p>Your friends at Spring Health and Wellness</p>
        <p>Telephone: (727) 548-6100 ext. 208 </p>
        <p>Fax Number: (352) 340-5991 </p>
        <p><a href="https://springhealthwellness.com" style="background-color: #008CBA; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 20px;">Visit our website</a></p>

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
  transporter.sendMail(mailOptions2, (error, info) => {
    if (error) {
      res.status(500).send("Error sending email");
    } else {
      res.send("Email sent successfully");
    }
  });
});

module.exports = router;

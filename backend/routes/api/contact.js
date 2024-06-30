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
      pass: "pqcu pwrg bvht watu",
    },
  });

  const mailOptions = {
    to: ["ask@theaurawellness.com"],
    bcc: "albert.marrero10@gmail.com",
    subject: "New Enquiry - Aura Wellness",
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
    subject: "Your Friends At Aura Wellness",
    html: `
    <html>
      <body>
        <p>Thank you for reaching out to us. We are looking forward to helping you in your weight loss goals. A member of our team will be in touch to answer your questions and help schedule a consultation. In the meantime, you may refer to our website to explore our services.</p>
        <p>Your friends at Aura Wellness</p>
        <p>Telephone: 727-484-6999 ext. 101 </p>
        <p>Fax Number: (727) 545-0960 </p>
        <p><a href="https://www.theaurawellness.com/" style="background-color: #008CBA; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 20px;">Visit our website</a></p>

      </body>
    </html>
  `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email to ask@theaurawellness.com:", error);
      return res.status(500).send("Error sending email to the administrator");
    }

    transporter.sendMail(mailOptions2, (error, info) => {
      if (error) {
        console.error("Error sending email to the user:", error);
        return res.status(500).send("Error sending confirmation email to the user");
      }
      res.send("Emails sent successfully");
    });
  });
});

module.exports = router;

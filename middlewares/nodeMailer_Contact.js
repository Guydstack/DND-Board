const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MY_EMAIL,
    pass: process.env.MY_PASSWORD
  }
});


exports.sendEmailToUser = (_to, userName) => {
    const mail = {
      from: "dahan.nature.design@gmail.com",
      to: _to,
      subject: "Thank you for reaching out with DND Board",
      html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Form Submission Confirmation</title>
      </head>
      <body style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
          <h1 style="text-align: center; color: #333;">Thank You!</h1>
          <p style="font-size: 16px; line-height: 1.6;">Hello <strong>${userName}</strong>,</p>
          <p style="font-size: 16px; line-height: 1.6;">Thank you for reaching out to us. We have received your message and will get back to you shortly.</p>
          <p style="font-size: 16px; line-height: 1.6;">If you have any further questions or concerns, feel free to contact us.</p>
          <p style="font-size: 16px; line-height: 1.6;">Best regards,<br>The DND Board Team</p>
        </div>
      </body>
      </html>
    `
    };
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        console.error("Error sending email:", err);
        // Handle error, maybe send an error response or log it to a file
      } else {
        console.log("Email sent successfully");
        // Send a success response if needed
      }
    });
  };
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MY_EMAIL,
    pass: process.env.MY_PASSWORD
  }
});


exports.sendEmailToUser = (_to, userName,products,orderId) => {
        // Map through the products array to extract necessary data
        
        const mappedProducts = products.map(product => ({
            name: product.product_name,
            price: product.RTP,
            quantity: product.quantity,
            image: product.product_Img
        }));

        // Calculate the total amount
        const totalAmount = mappedProducts.reduce((total, item) => total + (item.price * item.quantity), 0);

        const mail = {
            from: "dahan.nature.design@gmail.com",
            to: _to,
            subject: "Thank you for your purchase with DND Board",
            html: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Order Confirmation</title>
            </head>
            <body style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">
              <div style="max-width: 600px; margin: 0 auto; background-color: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                <h1 style="text-align: center; color: #333;">Thank You for Your Purchase!</h1>
                <p style="font-size: 16px; line-height: 1.6;">Hello <strong>${userName}</strong>,</p>
                <p style="font-size: 16px; line-height: 1.6;">Your order (${orderId}) has been successfully processed. Here are the details:</p>
                <ul style="font-size: 16px; line-height: 1.6;">
                  ${mappedProducts.map(item => `<li>${item.name} - ${item.price} USD (Quantity: ${item.quantity})<br /><img src="${item.image}" alt="${item.name}" style="max-width: 100px; max-height: 100px;"></li>`).join('')}
                </ul>
                <p style="font-size: 16px; line-height: 1.6;">Total amount: $${totalAmount}</p>
                <p style="font-size: 16px; line-height: 1.6;">If you have any questions or concerns regarding your order, feel free to contact us.</p>
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
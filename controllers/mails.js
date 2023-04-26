const nodemailer = require("nodemailer");
exports.sendMail = async (user, booking) => {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "thanaphum.tw@gmail.com",
      pass: "unsmzhkwzkyrfxsb",
    },
    secure: true, // upgrades later with STARTTLS -- change this based on the PORT
  });
  const bookingDate = new Date(booking.bookingDate);
  const mailData = {
    from: "thanaphum.tw@gmail.com",
    to: user.email,
    subject: `Your Booking Confirmation - ${booking._id.toString()}`,
    text: `Dear ${user.name},
         
 Thank you for choosing our Hotel service. We are pleased to confirm your booking for the following details:
     Booking ID: ${booking._id.toString()}
     Service: Hotel
     Booking Date: ${bookingDate.getDate()}-${
      bookingDate.getMonth() + 1
    }-${bookingDate.getFullYear()}
   
 We kindly ask that you review the details above to ensure that everything is accurate. If you notice any discrepancies, please do not hesitate to contact us at thanaphum.tw@gmail.com.

 Sincerely,
 Thanaphum T.`,
    // html: "<b>Hey there! </b><br> This is booking confirmation for booking id <br/>",
  };

  transporter.sendMail(mailData, (error, info) => {
    if (error) {
      return console.log(error);
    }
  });
};

const nodemailer = require("nodemailer");
exports.sendMail = async (req, res, next) => {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "thanaphum.tw@gmail.com",
      pass: "unsmzhkwzkyrfxsb",
    },
    secure: true, // upgrades later with STARTTLS -- change this based on the PORT
  });
  const { to, subject, text } = req.body;
  const mailData = {
    from: "thanaphum.tw@gmail.com",
    to: to,
    subject: subject,
    text: text,
    html: "<b>Hey there! </b><br> This is our first message sent with Nodemailer<br/>",
  };

  transporter.sendMail(mailData, (error, info) => {
    if (error) {
      return console.log(error);
    }
    res.status(200).send({ message: "Mail send", message_id: info.messageId });
  });
};

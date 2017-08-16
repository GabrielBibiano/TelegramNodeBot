module.exports = (nodemailer, bodyEmail) => {
  let transporter = nodemailer.createTransport({
      host: '',
      port: 465,
      secure: true, // secure:true for port 465, secure:false for port 587
      auth: {
          user: 'user',
          pass: 'pass'
      }
  });

  let mailOptions = {
      from: '"Telegram Bot" ', // sender address
      to: '', // list of receivers
      subject: 'Chamado OTRS', // Subject line
      html: `${bodyEmail.user}<br>${bodyEmail.problem}` // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);

      return true
  });
}
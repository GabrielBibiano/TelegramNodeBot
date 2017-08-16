module.exports = (nodemailer, bodyEmail) => {
  let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: true, // secure:true for port 465, secure:false for port 587
      auth: {
          user: '',
          pass: ''
      }
  });

  let mailOptions = {
      from: '"Fred Foo 👻" <>', // sender address
      to: '', // list of receivers
      subject: 'Tijuca Bot - OTRS', // Subject line
      text: bodyEmail, // plain text body
      html: bodyEmail // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      $.sendMessage('Chamado confimado! Em breve, entraremos em contato com você.')
      console.log('Message %s sent: %s', info.messageId, info.response);
  });
}
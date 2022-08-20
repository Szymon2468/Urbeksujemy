require('dotenv').config();

export default function handler(req, res) {
  const { article } = req.body;

  let nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'Urbexujemy@gmail.com',
      pass: process.env.PASSWORD
    },
    secure: true
  });

  const mailData = {
    from: 'Urbexujemy@gmail.com',
    to: 'Urbexujemy@gmail.com',
    subject: `Komentarz czeka na weryfikację`,
    text: `Komentarz z artykułu o nazwie ${article} czeka na weryfikację`,
    html: (
      <div>{`Komentarz z artykułu o nazwie ${article} czeka na weryfikację`}</div>
    )
  };

  transporter.sendMail(mailData, (err, info) => {
    if {(err) console.log(err)};
    else console.log(info);
  });

  res.status(200);
}

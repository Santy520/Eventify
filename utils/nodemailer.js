const nodeMailer = require('nodemailer');

const transporter = nodeMailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "project2group1ryan@gmail.com",
    pass: process.env.NODEMAILER_PASS,
  },
});

const signUpMail = (createUser) => {
  try {
    const htmlOutput = `
    <p>Thank you for signing into our Event Manager!</p>
    <h3>Details:</h3>
    <ul>
      <li>Name: ${createUser.name}</li>
      <li>Email: ${createUser.email}</li>
    </ul>
    `;
 
    const main = async () => {
      // send mail with defined transport object
      const info = await transporter.sendMail({
        from: '"Nodemailer-P2G1" <project2group1ryan@gmail.com>', // sender address
        to: createUser.email, // list of receivers
        subject: "Nodemailer Tester", // Subject line
        text: "Hello world?", // plain text body
        html: htmlOutput, // html body
      });
      console.log("Message sent: %s", info.messageId);
    }
    main();
  } catch (err) {
    return console.log(err)
  }
};

module.exports = { signUpMail };
const nodeMailer = require('nodemailer');

// port: TLS 587

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
  
    const transporter = nodeMailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: "project2group1ryan@gmail.com",
        pass: process.env.NODEMAILER_PASS,
      },
      // tls: {
      //   rejectUnauthorized: false
      // }
    });
  
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

// const transporter = nodeMailer.createTransport(transport[, defaults]);

// Send mail command line:
// transporter.sendMail(data[, callback])

module.exports = { signUpMail };

// Central idea for project:
// Send out notifications to user when they subscribe to event
// ==> Use event handler to send email when user hits subscribe button

// Long term goal - Send out email to subscribed users before event based on time
// But HOW?
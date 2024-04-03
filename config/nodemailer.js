const nodeMailer = require('nodemailer');

// const transporter = nodeMailer.createTransport(transport[, defaults]);

// Send mail command line:
// transporter.sendMail(data[, callback])

module.exports = nodeMailer;

// Central idea for project:
// Send out notifications to user when they subscribe to event
// ==> Use event handler to send email when user hits subscribe button

// Long term goal - Send out email to subscribed users before event based on time
// But HOW?
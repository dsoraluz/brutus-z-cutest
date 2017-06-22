const express = require('express');
const siteRoutes = express.Router();

const nodemailer = require('nodemailer');

siteRoutes.get('/about', (req,res,next)=>{
  res.render('about');
});

siteRoutes.get('/youtube', (req,res,next)=>{
  res.render('youtube');
});

siteRoutes.get('/gallery', (req,res,next)=>{
  res.render('gallery');
});


siteRoutes.get('/social', (req,res,next)=>{
  res.render('social');
});

siteRoutes.get('/contact', (req,res,next)=>{
  res.render('contact');
});

siteRoutes.post('/contact', (req,res,next)=>{

  let name = req.body.name;
  let email = req.body.email;

  const brutusEmail = process.env.GMAIL_USERNAME;

  let userMessage = req.body.message;


  // Create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USERNAME, //User Email address
      pass: process.env.GMAIL_PASSWORD
    }
  });

  // Setup email data with unicode symbols
  let mailOptions = {
    // Sender address
    from: `Contact @ Brutus Z Cutest <brutuszcutest@gmail.com>`,
    // List of receivers
    to: `${brutusEmail}`,
    // Subject Line
    subject: `New Message for Brutus!`,
    // Plain text body
    html: `<h2> Someone wants to reach out: </h2> \n <p>Who: ${name} <br/><br/> Email: ${email} <br/><br/> Message: <br/></br/> ${userMessage}`
  };

  // Send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info)=>{
    if (error){
      res.send(500);
      console.log(error);
      return;
    }else {
      console.log('Message %s sent: %s', info.messageId, info.response);
      transporter.close();
      res.redirect('/');
    }
  });

});


module.exports = siteRoutes;

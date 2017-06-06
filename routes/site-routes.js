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
    from: `New Soul Transformation <soultrahsformation@gmail.com>`,
    // List of receivers
    to: `${email}`,
    // Subject Line
    subject: `${toFirstName}, Welcome to New Soul Transformation!!`,
    // Plain text body
    html: `<h2> WELCOME! </h2> \n <p>${toFirstName}, <br/><br/> Send your friends the following link </p> \n <a href="localhost:3000/signup/${id}">  <h3>SIGNUP LINK</h3> </a>`
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

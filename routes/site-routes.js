const express = require('express');
const siteRoutes = express.Router();

siteRoutes.get('/about', (req,res,next)=>{
  res.render('about');
});

siteRoutes.get('/past-content', (req,res,next)=>{
  res.render('past-content');
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


module.exports = siteRoutes;

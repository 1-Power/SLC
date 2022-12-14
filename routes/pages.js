const { Router } = require("express");
const express = require("express");
const router = express.Router();

// Rendering the index pages
router.get('/', function (req, res){
    res.render('./pages/index');
});

// Rendering the About Us page 
router.get('/about', function (req, res){
    res.render('./about-us/About');
});

// Renderinf the Contact Pagse
router.get('/contact', function (req, res){
    res.render('./contact-us/Contact');
});

// rendering the Oratice Page
router.get('/services', function (req, res){
    res.render('./services/service');
});

router.get('/FAQ',function (req, res){
    res.render('./FAQ/FAQ');
});

router.get('/team',function (req, res){
    res.render('./team/team');
});

router.get('/terms',function (req,res){
    res.render('./Terms/terms-conditions');
});

router.get('/privacy',function (req,res){
    res.render('./Privacy/privacy-policy');
});



// Exporting all of the pages to the index.js files.
// there express will run this on the server.
module.exports = router;
const express = require('express');
const mysql = require('mysql2');
const router = express.Router();
const fs = require('fs');
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});
router.get('/' , (req,res)=>{
    res.render('index.hbs')
})
router.get('/about', (req,res)=>{
    res.render('about.hbs');
})
router.get('/register' , (req,res)=>{
    res.render('register.hbs')
})
router.get('/login',(req,res)=>{
    res.render('login.hbs')
})
router.get('/home' ,(req,res)=>{
    if(req.session.userId){
        var name , image;
        db.query("select * from users where email = ?",[req.session.userId] , (err,result)=>{
                name = result[0].name;
                image = result[0].image;
                console.log('name and image '+name);
                console.log('name and image '+image);
                return res.render('home.hbs', {name ,image});
        })
    }else{
       res.redirect('/');
    }
})

router.get('/resume',(req,res)=>{
    if(req.session.userId){
        var name , image;
        db.query("select * from users where email = ?",[req.session.userId] , (err,result)=>{
                name = result[0].name;
                image = result[0].image;
                console.log('name and image '+name);
                console.log('name and image '+image);
                return res.render('resume.hbs', {name ,image});
        })
    }else{
       res.redirect('/')
    }
})
router.get('/readfile',(req,res)=>{
    if(req.session.userId){
        var name , image;
        db.query("select * from users where email = ?",[req.session.userId] , (err,result)=>{
                name = result[0].name;
                image = result[0].image;
                console.log('name and image '+name);
                console.log('name and image '+image);
                fs.readFile('C:/Users/sahin/demo.txt','utf-8' , (err,data)=>{
                    return res.render('readfile.hbs',{data,name,image});
                })
                // return res.render('resume.hbs', {name ,image});
        })
    }else{
        res.redirect('/');
    }
})

router.get('/create1',(req,res)=>{
    if(req.session.userId){
        return res.render('create.hbs');
    }else{
        res.redirect('/');
    }
})
router.get('/create2',(req,res)=>{
    if(req.session.userId){
        return res.render('create2.hbs');
    }else{
        res.redirect('/');
    }
})
router.get('/logout' , (req,res)=>{
    req.session.destroy();
    res.redirect('/');
})
router.get('*',(req,res)=>{
    res.redirect('/');
})
module.exports = router;
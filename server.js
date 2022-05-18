const express = require('express');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');

const app = express();
const PORT = 4000;

const oneDay = 1000 * 60 * 60 * 24;

app.use(sessions({
    secret: "astaecheiameasupersecreta420",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname));

app.use(cookieParser());

const myusername = 'nume';
const mypassword = 'parola';


var session;

app.get('/',(req,res) => {
    session=req.session;
    if(session.userid){
        res.redirect('main.html');
    }else
    res.sendFile('views/index.html',{root:__dirname})
});

app.post('/user',(req,res) => {
    if(req.body.username == myusername && req.body.password == mypassword){
        session=req.session;
        session.userid=req.body.username;
        console.log(req.session)
        res.redirect('main.html') ;
    }
    else{
        res.send(`Date incorecte! <a href=\'/logout'>try again</a>`)
    }
})

app.get('/logout',(req,res) => {
    req.session.destroy();
    res.redirect('/');
});

app.get('*',(req,res) =>{
    res.redirect('views/err404.html');
})


app.listen(PORT, () => console.log(`Server Running at port ${PORT}`));
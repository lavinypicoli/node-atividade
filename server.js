const express=require('express');
const bodyparser=require('body-parser');
const handlebars=require('express-handlebars');
const app=express();
const mysql=require('mysql');

const urlencondeParser=bodyparser.urlencoded({extended:false});

//Conexão BD MySQL
const sql = mysql.createConnection({
    host:'localhost',
    user: 'laviny',
    password: '12345',
    port: 3306,
});
sql.query("use atividade");



//Routes
app.get("/", function(req, res){

    res.render('index');
});
app.get("/index", function(req, res){res.sendFile(__dirname+"/js/index.js");});

app.get("/style", function(req, res){res.sendFile(__dirname+"/css/style.css");});

app.get("/cadastrarEstacao", function(req, res){ res.render("cadastrarEstacao")});
app.get("/procuraEstacao/:id?", function(req, res){ 
    if(!req.params.id){
        sql.query("select * from estacoes", function(err, results, fields){
            res.render('procuraEstacao',{data:results});
        });
    }
    //res.render("procuraEstacao")
});


app.post("/controllerForm", urlencondeParser, function(req, res){

     sql.query("insert into estacoes values (?,?,?,?,?)",
    [req.body.id, req.body.serial, req.body.lat, req.body.lon, req.body.nome]);
    res.render('index'); 
});




//Tamplate
app.engine("handlebars", handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


//Start server
app.listen(3000, function(req, res){
    console.log('Servidor está rodando');
});




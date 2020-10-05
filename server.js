const express=require('express');
const bodyparser=require('body-parser');
const handlebars=require('express-handlebars');
const app=express();
const mysql=require('mysql');

const urlencondeParser=bodyparser.urlencoded({extended:false});

//Start server
app.listen(3000, function(req, res){
    console.log('Servidor está rodando');
});

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
app.get("/insereDados", function(req, res){ res.render("insereDados")});

app.get("/visualizaDados/:id?", function(req, res){ 
    if(!req.params.id){
        sql.query("select * from dados", function(err, results, fields){
            res.render('visualizaDados',{data:results});
        });

    }else{
        sql.query("select * from dados where id=?",[req.params.id], function(err, results, fields){
            res.render('visualizaDados',{data:results});
    });

    }
});



app.get("/procuraEstacao/:id?", function(req, res){ 
    if(!req.params.id){
        sql.query("select * from estacoes", function(err, results, fields){
            res.render('procuraEstacao',{data:results});
        });

    }else{
        sql.query("select * from estacoes where id=?",[req.params.id], function(err, results, fields){
            res.render('procuraEstacao',{data:results});
    });

    }
});

app.get("/procuraDados/:id?", function(req, res){ 
    if(!req.params.id){
        sql.query("select * from estacoes", function(err, results, fields){
            res.render('procuraDados',{data:results});
        });

    }else{
        sql.query("select * from estacoes where id=?",[req.params.id], function(err, results, fields){
            res.render('procuraDados',{data:results});
    });

    }
});

app.post("/formInsereDados", urlencondeParser, function(req, res){
    sql.query("insert into dados values(?,?,?,?,?,?)",
    [req.body.id, req.body.estacao_id, req.body.temperatura, req.body.velocidade_vento,
        req.body.umidade, req.body.data]);
    res.render('index');    
});


app.post("/controllerForm", urlencondeParser, function(req, res){
     sql.query("insert into estacoes values (?,?,?,?,?)",
    [req.body.id, req.body.serial, req.body.lat, req.body.lon, req.body.nome]);
    res.render('index'); 
});

app.get('/excluir/:id', function(req, res){
    sql.query("delete from estacoes where id=?", [req.params.id]);
    sql.query("select * from estacoes", function(err, results, fields){
        res.render('procuraEstacao',{data:results});
    });
});

app.get("/editar/:id", function(req, res){ 
    sql.query("select * from estacoes where id=?",[req.params.id], function(err, results, fields){
        res.render('editar', {id:req.params.id, serial:results[0].serial, lat:results[0].lat,
                    lon:results[0].lon, nome:results[0].nome}); 
    });

});

app.get('/excluirDados/:id', function(req, res){
    sql.query("delete from dados where id=?", [req.params.id]);
    sql.query("select * from dados", function(err, results, fields){
        res.render('visualizaDados',{data:results});
    });
});

app.get("/editarDados/:id", function(req, res){ 
    sql.query("select * from dados where id=?",[req.params.id], function(err, results, fields){
    res.render('editarDados', {id:req.params.id, estacao_id:results[0].estacao_id, temperatura:results[0].temperatura,
        velocidade_vento:results[0].velocidade_vento, 
        umidade:results[0].umidade, data:results[0].data}); 
    });

});


app.post("/controllerUpdate", urlencondeParser, function(req, res){
    sql.query("update estacoes set serial=?, lat=?, lon=?, nome=? where id=?",
    [ req.body.serial, req.body.lat, req.body.lon, req.body.nome, req.body.id]);

    sql.query("select * from estacoes", function(err, results, fields){
        res.render('procuraEstacao',{data:results});
    });
});

app.post("/controllerUpdateDados", urlencondeParser, function(req, res){
    sql.query("update dados set estacao_id=?, temperatura=?, velocidade_vento=?, umidade=? data=?  where id=?",
    [req.body.estacao_id, req.body.temperatura, req.body.velocidade_vento, 
        req.body.umidade, req.body.data, req.body.id]);

    sql.query("select * from dados", function(err, results, fields){
            res.render('visualizaDados',{data:results});
        });
});

//Tamplate
app.engine("handlebars", handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');







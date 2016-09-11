var express = require('express');

var app = express();


app.use(express.static('public'));

app.get('/', function (req, res){
    res.render('index', { title: 'hey', message: 'Hello There'});
});

app.get('/user', function (req, res){
    var usuario = 1;
    var total = 1 + 1;
});

app.listen(3000, function() {
    console.log('escuchando en el puerto : 3000');
});
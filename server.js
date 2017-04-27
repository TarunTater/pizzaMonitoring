var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('PizzaOrders', ['PizzaOrders']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/getPizzas', function(req, res){
    console.log("I received a get request");
    db.PizzaOrders.find(function(err, docs){
        console.log(docs);
        res.json(docs);
    });

});


app.delete('/pizza/:id', function(req,res){
    console.log("reached here");
    var id = req.params.id;
    console.log(id);
    db.PizzaOrders.remove({_id: mongojs.ObjectId(id)}, function(err,doc){
        res.json(doc);
    });
});

app.listen(3000);
console.log("Server running at port 3000");

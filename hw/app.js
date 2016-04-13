var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs');

app.listen(8109, function(){
	console.log('server run');
});

app.use(express.static('public/'));

app.get('/',function(req,res){
	res.sendFile(path.join(__dirname+'/index.html'));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended:true
}));

app.post('/ask', function(req,res){
	var id = req.body.ID;
	var content = fs.readFileSync('name.json');
	var obj = JSON.parse(content);
	console.log('name:'+obj[id]);
	res.send(obj[id]);
});


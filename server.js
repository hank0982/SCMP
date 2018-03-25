var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.listen(3001); //listens on port 3000 -> http://localhost:3001/
jsonParser = bodyParser.json()
const spawn = require('child_process').spawn;
var cors = require('cors')
app.use(cors())

app.post('/',jsonParser,function(req, res){
    console.log(req.body)
    var input = req.body.input;
    var predict_ps = spawn('python3', ['./neural_network.py', input]);
    predict_ps.stdout.on('data', (data) => {
        var pred = data.toString()
        pred = pred.substring(0, pred.length - 1);
        pred = parseFloat(pred)
        console.log('the predicted uniqueVistors is '+ pred)
        res.send({ res: pred });
    });
    
})
const express = require('express');

// Create our server
const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.static('server/public'));

const inventory = require('./modules/inventory');

// Start our server
app.listen(PORT, () => {
    console.log('listening on port', PORT);
});


app.get('/inventory', function(req, res) {
     console.log('request for /solutions was made');
     res.send(solutions);
 } );
 

app.post('/inventory', function(req, res) {
    console.log('in the post request!', req.body);
   if (req.body.firstNumber && req.body.secondNumber) { //need to change first and second number
        inventory.push(req.body);
        // console.log('NEW QUOTES', quoteList);
        res.sendStatus(201);
        // 201 = a status!
   } else {
        res.sendStatus(500);
   } 
});
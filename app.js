const express = require('express');
const app = express();
const port = 3000

app.use(function (req,res,next){
    res.header('Access-Control-Allow-Origin','*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
})

app.get('/', (req,res) =>{
    res.send('Hello World, siamo nella radice')
})

app.get('/f1', (req,res) =>{
    res.send('Hello World, siamo in F1')
})


app.listen(port, () =>{
    console.log('Example app listening at http://localhost:3000')
})

// middleware parte 2

var express = require('express');
var app = express();


let hello = (req, res) => {

    res.send('Hello World');

}

let consoleBody = (req, res, next) => {

    console.log(req.body);
    next();
   
}


app.use('/', express.json()); // organiza nossa requisição de modo que dentro da req tenha um objeto chamado body e então podemos ter acesso ao conteudo que tem lá
app.use('/', consoleBody);

app.get('/', hello);

app.post('/', hello);




app.listen(3000, ()=> {

   console.log('server rodando...')

})
// middleware

var express = require('express');
var app = express();

// isso é um middleware
//  (req, res) => {

//     console.log(req);
//     res.json({name: 'Igor'});

//  })

let hello = (req, res) => {

    res.send('Hello World');

}

// Ele pode permitir a criação de uma função que a cada requisição, ela passe por essa função e faça alguma coisa 

let consoleMethod = (req, res, next) => {

    console.log(req.method);
    next();
    // chamamos o next para dizer que uma vez que a gente já executou esse middleware, ele precisa passar para o proximo middleware
    // O next() vazio significa que deu tudo certo e que ele pode executar o proximo middleware
    // também podemos passar um erro dentro do next()
    // e qualquer erro que tenha dado dentro da aplicação, fazendo com que ele não passe para o proximo middleware e retorne o erro do middleware
    // next("erro de qualquer coisa");

}
app.use('/', consoleMethod); // o middleware responderá a qualquer tipo de metodo

app.get('/', hello);

// também funciona dessa maneira

// app.get('/', consoleMethod);
// app.get('/', hello);
// porém, não iria funcionar para o post, então para resolver isso, utilizaremos o 'use'


app.post('/', hello);




app.listen(3000, ()=> {

   console.log('server rodando...')

})
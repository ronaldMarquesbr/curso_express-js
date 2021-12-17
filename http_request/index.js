// http request
//  requisição faz parte do prot. http e é com ela que um computador-cliente se comunica com um computador-servidor
//  prot. http: convenção para que o computador-servidor e o computador-cliente 'falem' a mesma lingua
//  O que é necessário em um requisição: 
//  -Linha de requisição: Informa o método de requisição(ex: get), informa o caminho que estamos mandando(ex: domínio do site), também informa a versão do http(padrão: 1.1) que está sendo utilizada 
//  -Header: Local onde se encontra todos o dados necessários para que o servidor saiba como processar os dados passados na requisição
//  -Body: Local onde se encontra os dados necessários para que o servidor consiga fazer alguma coisa 
//
//
 var express = require('express');
 var app = express();

//  app.get('/', (req, res) => {

//     console.log(req);
//     res.send('<h1>Hello World </h1>');

//  })

app.post('/', (req, res) => {

    console.log(req);
    res.send('<h1>Hello World </h1>');

 })

app.listen(3000, ()=> {

    console.log('server rodando...')

})

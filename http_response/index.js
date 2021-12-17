// http response
//  status: versão do http(normalmente 1.1), cod. do status, mensagem de retorno do status
//  codigo do status: possui familia de possibilidades
//  cod: 100: meramente informativa; 200: requisição retornada com sucesso; 201: ex: criação de usuario finalizado com sucesso
//  cod: 300: informar que o endereço desejado mudou de local e mostrar o local correto; 400: quando algo dá errado no servidor, como o erro 404 que é retornado ao tentar encontrar um local que não existe no servidor
//  cod 500: indica um erro no lado do servidor 
//
//  Header: Informações importantes para que o cliente saiba como lidar com aquela resposta
// body: conteudo retornado
var express = require('express');
var app = express();

//  app.get('/', (req, res) => {

//     console.log(req);
//     res.send('<h1>Hello World </h1>');

//  })

// app.post('/', (req, res) => {

//     console.log(req);
//     res.send('<h1>Hello World </h1>');

//  })

app.get('/', (req, res) => {

   console.log(req);
   res.json({name: 'Igor'});

})

app.listen(3000, ()=> {

   console.log('server rodando...')

})

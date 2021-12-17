var express = require('express');
var app = express();

let alunos = [{id: 0, nome: 'Jose'},

    {id: 1, nome: 'Maria'},
    {id: 2, nome: 'Joao'},
    {id: 3, nome: 'Marcos'}]


app.use(express.urlencoded({ extended: true })); // pega o tipo de dado Form url encoded


app.get('/', (req, res) => {

    res.send('Hello World')

});


app.get('/alunos', (req, res) => {

    
    res.json(JSON.stringify(alunos));

})


app.get('/aluno', (req, res) => {

    console.log(req.body);
    console.log(req.query);
    // let aluno = alunos[req.body.id];
    //para pegar com a query, devemos utilizar 
    let aluno = alunos[req.query.id];
    res.json(aluno);

})

// ao colocar os dois pontos, podemos acessar os parametros atraves da propriedade 'params'
// app.get('/aluno/:id', (req, res) => {
// // ele entra nesse middleware por causa que a rota se encaixa melhor 
//     console.log(req.params.id);
//     let aluno = alunos[req.params.id];
//     res.json(aluno);

// })


// também podemos fazer desta maneira:
// localhost:xxxx?id=2
// rota: localhost:3000
// query: id=2
// é diferente disso: localhost:3000/aluno/2





app.listen(3000, () => console.log('Server rodando...'));
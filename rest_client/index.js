// a aplicação que estamos criando que fica escutando uma requisição do tipo get, put, delete, post é chamada de API rest
// vamos utilizar uma programa chamada rest-client(cliente do tipo rest), ele consegue fazer as chamadas para nossa API
// O que fizemos até agora, é fazer a chamda a partir do html, utilizando o fetch


const express = require('express');
const path = require('path');

const app = express();

app.use('/meusite', express.static(path.join(__dirname, 'client')));

app.get('/', (req, res) => {

    res.send('<h1>Hello world from GET!</h1>');

})


app.post('/', (req, res) => {

    res.send('<h1>Hello world from POST!</h1>');

})


app.put('/', (req, res) => {

    res.send('<h1>Hello world from PUT!</h1>');

})


app.delete('/', (req, res) => {

    res.send('<h1>Hello world from DELETE!</h1>');

})


const PORT = 5000;
app.listen(PORT, () => {

    console.log(`Server running on Port:${PORT}`);

})

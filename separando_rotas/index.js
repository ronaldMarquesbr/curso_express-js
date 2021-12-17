var express = require('express');
var app = express();
var aluno = require('./routes/aluno');


app.use(express.urlencoded({ extended: true })); 

app.use('/aluno', aluno);






// do outro exemplo
// pode ser acessado dessa forma:
// exemplo
// localhost:3000/api/aluno/2

app.get('/', (req, res) => {

    res.send('Hello World')

});


app.listen(3000, () => console.log('Server rodando...'));
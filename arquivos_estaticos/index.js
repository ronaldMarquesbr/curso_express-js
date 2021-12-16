const express = require('express');
const path = require('path'); //ajuda a montar os caminhos do nosso arquivos

const app = express();


// app.use(express.static(path.join(__dirname, 'client')))
app.use('/meusite', express.static(path.join(__dirname, 'client')))
// neste caso, os nosso arquivos só vão ser servidos quando tiver o '/meusite' depois do endereço, no caso 'localhost:5000'
// ficaria assim: 'localhost:5000/meusite/index.html'


// arquivos estaticos: não é gerado dinamicamente, não muda de acordo com uma requisição
// arquivo dinamico: arquivo gerado a partir do back-end
const PORT = 5000;
app.listen(PORT, () => {

    console.log(`Server running on Port:${PORT}`);

})
// assim que a gente recebe uma requisição, ao utilizar o método use(), a primeira coisa que nosso app vai fazer é 
// verificar se o que a gente passou como argumento consegue atender aquela requisição 
const express = require('express');
const path = require('path');

const app = express();

app.use('/meusite', express.static(path.join(__dirname, 'client')))

app.get('/', (req, res) => {
// localhost:5000/

    // permite que mude o alguma coisa do meu header
    // res.set('Content-Type', 'text/plain');

    // tipo de conteudo do header
    res.type('html');
    res.send('<h1>Hello world from GET!</h1>');

})

const PORT = 5000;
app.listen(PORT, () => {

    console.log(`Server running on Port:${PORT}`);

})

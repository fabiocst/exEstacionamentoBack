const express = require('express');
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');
//protocolo de comunicacão entre apis e outros serviços cors
//CORS: autoriza para qualquer tipo de serviço (front-end, outras
//apis, etc)
const cors = require('cors')
const app = express();

let limiter = rateLimit({
    max: 3,
    windowMs: 60*60*1000,
    message:'We have received too many requests from this IP'
});

app.use('/', limiter);


const port = 8081;
//importações
const proprietario = require('./controllers/ProprietarioControlls.js');
const veiculo = require('./controllers/VeiculoControlls.js');
//Rotas
app.use(bodyParser.json());
//Função CORS para a autorização do uso da API
app.use(cors())
app.get('/', (req, res) => res.send('Estou aqui'))
app.use('/proprietario', proprietario);
app.use('/veiculo', veiculo);
app.listen(port, () => console.log(`Servidor rodando porta ${port}!`))
const express = require('express')   //importanto express   
const mongoose = require('mongoose') 
const cors = require('cors') //frontEnd acesse o backend
const routes = require('./routes') //importando as rotas (caminho relativo)

const http = require('http')

const {setupWebsocket} = require('./websocket')

const app = express(); //variavel app recebe express (função)

const server = http.Server(app) //Instancia do Server

setupWebsocket(server)



mongoose.connect('mongodb+srv://admin:admin123@cluster0-ivhrm.mongodb.net/projeto10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})//String de Conexão MONGODB

app.use(cors());
app.use(express.json()); //configurando todas as rotas p/ express ler json
app.use(routes); // "instanciando" as routes 

server.listen(3333); //Servidor rodando na porta 3333 (ouvindo)


//NODEMON - Npm run dev ( Script)

//BANCO MONGO DB (Não Relacional)

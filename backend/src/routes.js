//separando rotas do app
//importando modulo de roteamento do express

const {Router} = require('express')
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')


const routes = Router(); //Router = Função controla as rotas

routes.get('/devs', DevController.index);//Lista todos os devs
routes.post('/devs', DevController.store);  

 

routes.get('/search', SearchController.index)//Lista os devs com filtros(localizaçao e techs)

module.exports =routes; //Exportando as rotas desse arquivo.(deve ser importado no index)
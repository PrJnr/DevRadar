const axios = require('axios') //axios serve p/ conectar com outras api restfull (no caso do github)
const Dev = require('../models/dev')
const parseStringAsArray = require('../utils/parseStringAsArray')


module.exports = {

    async index(req, res) {
        const devs = await Dev.find();

        return res.json(devs);
    },


    async store (request, response) { //requisição e resposta    
        const {github_username, techs, latitude, longitude} = request.body; //Requisição (Corpo da Req.)
        
        let dev = await Dev.findOne({github_username})

        if(!dev) {
            
        const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`) //apiResponse -> response vindo do git
    
        const {name = login, avatar_url, bio} = (apiResponse.data); // name = login se name nao existir recebe o login por padrao
    
        const techsArray = parseStringAsArray(techs) //techs vem da requisição em formato string
    
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude]
        }
    
        dev = await Dev.create({
            github_username,
            name,
            avatar_url,
            bio,
            techs: techsArray,
            location
        })
    

        }

        return response.json(dev)
    
    }
    
}

//FUNÇÃO STORE : Responsavel por fazer as requisições e enviar as respostas p/ o Front e GRAVAR no BANCO.
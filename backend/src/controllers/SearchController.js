const DevController =  require('./DevController')

const Dev = require('../models/dev')
const {Router} = require('express')
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {
    async index(req, res){
        //Essa função vai:
        //Buscar todos os devs num raio de 10km
        //Filtrar por Tecnologias

        const {longitude, latitude, techs} = req.query;
        const arrayTechs = parseStringAsArray(techs)
        
        const devs = await Dev.find({
            techs: {
                $in: arrayTechs, //in = operador logio do mongoDB
            },

            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude] //no mongo tem que passar longitude antes de latitude
                    },

                    $maxDistance: 10000, //Operador p/ geolocalização do Mongo DB (dez mil = 10 km)
                },
            },
        })

        return res.json({devs})


        



    }
}
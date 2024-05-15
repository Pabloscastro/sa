const route = require("express").Router();//fiz uma lib utilizando o express para criar uma rota
const controler1 = require('../controllers/controler');

route.get('/',controler1.post);

module.exports = route


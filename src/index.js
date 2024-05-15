const express = require('express');//importando a lib e incluindo a express
const app = express(); //app é boa prática (apenas uma boa prática poderia ter feito)
const port = 3000;// porta do servidor
const apiRoute = require('./routes/router');


app.use('/api/posts', apiRoute);









app.listen(port) // porta para escutar o que está sendo chamado
//crear el servidor//
const express = require("express");

const app = express();


app.get('/me', (request, response) =>{
    console.log(request.method)
    response.status(200).json({
        message:'Robert, 42, Paraguay',
        verb: request.method
    })
})

app.post('/metas', (request, response) =>{
    console.log(request.method)
    response.status(200).json({
        message:'Futbol, Musica, Correr',
        verb: request.method
    })
})

app.patch('/metas', (request, response) =>{
    console.log(request.method)
    response.status(200).json({
        message:'Culminar Fullstack exitoso - Dedicarme 100% a la programacion',
        verb: request.method
    })
})

app.put('/bussines', (request, response) =>{
    console.log(request.method)
    response.status(200).json({
        message:'Itau - Global - Donde sea',
        verb: request.method
    })
})

app.listen(8000, () => {
    console.log('server started at port 8000');
})

//? HTTP
//*GET
//*POST
//*PUT
//*PATCH
//*DELETE

//?STATUS
//100
//200
//300
//400
//500






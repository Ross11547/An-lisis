const express = require("express");
const {PrismaClient} = require("@prisma/client");
const app = express();
const prisma = new PrismaClient();

app.get('/administrador',async(req,res)=>{
    const administrador = await prisma.administrador.findMany({});
    res.json(administrador);
})

app.post('/administrador',async(req,res) => {
    const administrador = await prisma.administrador.create({
        data: req.body
    })
    res.json(administrador)
})

app.put('/administrador/:id',async(req,res) => {
    const administrador = await prisma.administrador.update({
        where:{
            id_administrador: Number(req.params.id)
        },
        data: res.body
    })
    res.json(administrador)
})

app.delete('/administrador/.id',async(req,res) => {
    const administrador = await prisma.administrador.delete({
        where:{
            id_administrador: Number(req.params.id)
        }
    })
    res.body({
        data: administrador,
        message: "Admistrador eliminado"
    })
})
module.exports = app;
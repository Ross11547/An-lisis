const express = require("express");
const {PrismaClient} = require("@prisma/client");
const app = express();
const prisma = new PrismaClient();

app.get('/promociones',async(req,res)=>{
    const promociones = await prisma.promociones.findMany({});
    res.json(promociones);
})

app.post('/promociones',async(req,res) => {
    const promociones = await prisma.promociones.create({
        data: req.body
    })
    res.json(promociones)
})

app.put('/promociones/:id',async(req,res) => {
    const promociones = await prisma.promociones.update({
        where:{
            id_promociones: Number(req.params.id)
        },
        data: req.body
    })
    res.json(promociones)
})

app.delete('/promociones/:id',async(req,res) => {
    const promociones = await prisma.promociones.delete({
        where:{
            id_promociones: Number(req.params.id)
        }
    })
    res.json({
        data: promociones,
        message: "Promocion eliminada"
    })
})
module.exports = app;
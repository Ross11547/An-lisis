const express = require("express");
const {PrismaClient} = require("@prisma/client");
const app = express();
const prisma = new PrismaClient();

app.get('/ventas',async(req,res)=>{
    const ventas = await prisma.venta.findMany({});
    res.json(ventas);
})

app.post('/ventas',async(req,res) => {
    const ventas = await prisma.venta.create({
        data: req.body
    })
    res.json(ventas)
})

app.put('/ventas/:id', async(req,res) => {
    const ventas = await prisma.venta.update({
        where:{
            id_venta: Number(req.params.id)
        },
        data: req.body
    })
    res.json(sucursales)
})

app.delete('/ventas/:id',async(req,res) => {
    const ventas = await prisma.venta.delete({
        where:{
            id_venta: Number(req.params.id)
        } 
    })
    res.json({
        data:ventas,
        message: "Venta eliminada"
    })
})
module.exports = app;
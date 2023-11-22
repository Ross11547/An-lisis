const express = require("express");
const {PrismaClient} = require("@prisma/client");
const app = express();
const prisma = new PrismaClient();

app.get('/detalleventa',async(req,res)=>{
    const detalleventa = await prisma.detalle_Venta.findMany({});
    res.json(detalleventa);
})

app.post('/detalleventa',async(req,res) => {
    const detalleventa = await prisma.detalle_Venta.create({
        data: req.body
    });
    res.json(detalleventa);
})

app.put('/detalleventa/:id',async(req,res) => {
    const detalleventa = await prisma.detalle_Venta.update({
        where: {
            id_detalle_venta: Number(req.params.id)
        },
        data: req.body
    })
    res.json(detalleventa);
})

app.delete('/detalleventa/:id',async(req,res) => {
    const detalleventa = await prisma.detalle_Venta.delete({
        where:{
            id_detalle_venta: Number(req.params,id)
        }
    })
    res.json({
        data: detalleventa,
        message: "Detalle Venta eliminado"
    })
})
module.exports = app;
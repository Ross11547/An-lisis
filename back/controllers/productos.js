const express=require("express");
const {PrismaClient}=require("@prisma/client");
const app = express();
const prisma = new PrismaClient();

app.get('/productos',async(req,res) => {
    const productos = await prisma.productos.findMany({});
    res.json(productos);
})

app.post('/productos',async(req,res) => {
    const productos = await prisma.productos.create({
        data: req.body
    })
    res.json(productos);
})

app.put('/productos/:id',async(req,res) => {
    const productos = await prisma.productos.update({
        where:{
            id: Number(req.params.id)
        },
        data: req.body
    })
    res.json(productos)
})

app.delete('/productos/:id', async(req,res) => {
    const productos = await prisma.productos.delete({
        where:{
            id: Number(req.params.id)
        }
    })
    res.json({
        data: productos,
        message: "Producto eliminado"
    })
})

/* app.get('/productos/:id', async (req, res) => {
    const producto = await prisma.productos.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
    });
  
    if (!producto) {
      res.status(404).json({
        message: 'Producto no encontrado',
      });
      return;
    }
  
    res.json(producto);
  }); */

module.exports = app;
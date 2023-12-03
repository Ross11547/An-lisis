const express = require("express");
const { PrismaClient } = require("@prisma/client");
const app = express();
const prisma = new PrismaClient();

app.get("/ventas", async (req, res) => {
  const ventas = await prisma.venta.findMany({
    include: {
      detalle_venta: true,
      
    },
  });
  res.json(ventas);
});

app.post("/ventas", async (req, res) => {
  const ventas = await prisma.venta.create({
    data: req.body,
  });
  res.json(ventas);
});

app.put("/ventas/:id", async (req, res) => {
  const ventas = await prisma.venta.update({
    where: {
      id_venta: Number(req.params.id),
    },
    data: req.body,
  });
  res.json(sucursales);
});

app.delete("/ventas/:id", async (req, res) => {
  const ventas = await prisma.venta.delete({
    where: {
      id_venta: Number(req.params.id),
    },
  });
  res.json({
    data: ventas,
    message: "Venta eliminada",
  });
});
app.post("/vender", async (req, res) => {
  try {
    const productos = await prisma.productos.findMany({
      where: {
        id: {
          in: req.body.productos.map((producto) => producto.id),
        },
      },
    });
    //VALIDAR
    let flag = false;
    req.body.productos.forEach((producto) => {
      const productoExistente = productos.find(
        (prod) => prod.id === producto.id
      );
      if (producto.cantidad > productoExistente.cantidad) {
        flag = true;
        res.json({
          message: "Error",
          error:
            "la cantidad de " +
            productoExistente.nombre +
            " no puede ser mayor a la existente",
        });
      }
    });
    if (flag) return;
    const total = productos.reduce((suma, producto) => {
      const productoVendido = req.body.productos.find(
        (prod) => prod.id === producto.id
      );
      const totalProducto = producto.precio * productoVendido.cantidad;
      suma += totalProducto;
      return suma;
    }, 0);
    const venta = await prisma.venta.create({
      data: {
        id_usu: req.body.usuario,
        tipo_pago: req.body.tipoPago,
        descuento: req.body.descuento || 0,
        costo_total: total - req.body.descuento,
        detalle_venta: {
          createMany: {
            data: req.body.productos.map((producto) => ({
              cantidad: producto.cantidad,
              id_product: producto.id,
            })),
          },
        },
      },
    });
    req.body.productos.forEach(async (producto) => {
      await prisma.productos.update({
        where: {
          id: producto.id,
        },
        data: {
          cantidad: {
            decrement: producto.cantidad,
          },
        },
      });
    });
    res.json({
      message: "Vendido correctamente",
      data: venta,
    });
  } catch (e) {
    res.status(500).json({
      message: "Error",
      error: e.message,
    });
  }
});
module.exports = app;

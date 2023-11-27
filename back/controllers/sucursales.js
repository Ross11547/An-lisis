const express = require("express"); //PERMITE HACER RUTAS
const { PrismaClient } = require("@prisma/client"); //HACE LA CONEXION CON LA BASE DE DATOS
const app = express(); //CREA RUTAS
const prisma = new PrismaClient();

app.get("/sucursales", async (req, res) => {
  const sucursales = await prisma.sucursales.findMany({}); //Trae todos los datos en formato objeto
  res.json(sucursales);
});

app.post("/sucursales", async (req, res) => {
  const sucursales = await prisma.sucursales.create({
    data: req.body,
  });
  res.json(sucursales);
});

app.put("/sucursales/:id", async (req, res) => {
  const sucursales = await prisma.sucursales.update({
    where: {
      id_sucursal: Number(req.params.id),
    },
    data: req.body,
  });
  res.json(sucursales);
});

app.delete("/sucursales/:id", async (req, res) => {
  const sucursales = await prisma.sucursales.delete({
    where: {
      id_sucursal: Number(req.params.id),
    },
  });
  res.json({
    data: sucursales,
    message: "Sucursal eliminada",
  });
});
module.exports = app; //exporta la funcion para reutilizar en otros lados (esto siempre va al final)

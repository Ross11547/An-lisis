const express = require("express");
const { PrismaClient } = require("@prisma/client");
const app = express();
const prisma = new PrismaClient();

/* app.get('/usuario', async (req, res) => {
    const usuario = await prisma.usuario.findMany({});
    res.json(usuario);
}) */

app.get("/usuario", async (req, res) => {
    try {
      const usuario = await prisma.usuario.findMany({});
      res.json({
        data: usuario,
        message: "usuarios obtenidos correctamente",
      });
    } catch (error) {
      res.status(500).json({
        message: "Error al obtener usuario",
        error: error.message,
      });
    }
  });

app.post('/usuario', async (req, res) => {
    const usuario = await prisma.usuario.create({
        data: req.body
    })
    res.json(usuario)
})

app.put('/usuario/:id', async (req, res) => {
    const usuario = await prisma.usuario.update({
        where: {
            id_usuario: Number(req.params.id)
        },
        data: req.body
    })
    res.json(usuario)
})

app.delete('/usuario/:id', async (req, res) => {
    const usuario = await prisma.usuario.delete({
        where: {
            id_usuario: Number(req.params.id)
        }
    })
    res.json({
        data: usuario,
        message: "Cliente eliminado"
    })
})
app.post("/login", async (req, res) => {
    const { correo, password } = req.body;
    const login = await prisma.usuario.findFirst({
        where: {
            correo: correo,
            password: password,
        },
    });
    if (!login) {
        res.json({
            message: "Usuario no autorizado",
            error: "Usuario no autorizado",
        });
        return;
    }
    login.password = undefined;
    res.json({
        message: "Inicio de sesion correcto",
        data: login,
    });
});
module.exports = app;
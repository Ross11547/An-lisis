const express = require("express");
const {PrismaClient} = require("@prisma/client");
const app = express();
const prisma = new PrismaClient();

app.get('/blog',async(req,res)=>{
    const blog = await prisma.blog.findMany({});
    res.json(blog);
})

app.post('/blog',async(req,res) => {
    const blog = await prisma.blog.create({
        data: req.body
    })
    res.json(blog)
})

app.put('/blog/:id', async(req,res) => {
    const blog = await prisma.blog.update({
        where:{
            id_blog: Number(req.params.id)
        },
        data: req.body
    })
    res.json(blog)
})

app.delete('/blog/:id',async(req,res) => {
    const blog = await prisma.blog.delete({
        where:{
            id_blog: Number(req.params.id)
        } 
    })
    res.json({
        data:blog,
        message: "Blog eliminado"
    })
})
module.exports = app;
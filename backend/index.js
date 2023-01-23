const express = require('express')
const cors = require("cors")

const products = require("./products")

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req,res)=> {
    res.send("Welcome to our online shop api")
})


app.get("/products", (req,res)=> {
    res.send(products)
})


app.get("/products/1", (req,res)=> {
    res.send(products[0])
})
app.get("/products/2", (req,res)=> {
    res.send(products[1])
})
app.get("/products/3", (req,res)=> {
    res.send(products[2])
})
app.get("/products/4", (req,res)=> {
    res.send(products[3])
})
app.get("/products/5", (req,res)=> {
    res.send(products[4])
})
app.get("/products/6", (req,res)=> {
    res.send(products[5])
})
app.get("/products/7", (req,res)=> {
    res.send(products[6])
})
app.get("/products/8", (req,res)=> {
    res.send(products[7])
})
app.get("/products/9", (req,res)=> {
    res.send(products[8])
})



const port = process.env.PORT || 5000

app.listen(port, console.log(`server is running on port ${port}`))

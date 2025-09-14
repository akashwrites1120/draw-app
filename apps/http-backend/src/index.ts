import express from 'express'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from './config.js'
import { middleware } from './middleware.js'

const app = express()

app.use(express.json())

app.post("/signup", (req, res)=>{
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email
    res.json({
        message: "signed up"
    })
})

app.post("/signin", (req, res)=>{

    const userId =1
    const token = jwt.sign({
        userId
    },JWT_SECRET)
    
    res.json({
        token
    })
      
})

app.post("/room", middleware, (req, res)=>{
      
})

app.listen(3001)
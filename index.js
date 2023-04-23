import dotenv from "dotenv"
import express from 'express'
dotenv.config()

const app = express()
const port = 3000

const response = {
    answer : "This is a test"
}
app.get('/', (req, res)=>{
    res.json(response)
})

app.listen(port, ()=>{
    console.log(`Listening in port ${port}`)
})

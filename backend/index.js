//import
const express = require('express')
require('./connection')
var empmodel = require('./models/employee')
var cors=require('cors')
//initialize
const app = express()
//middleware
app.use(express.json())
app.use(cors())
//api creation
app.get('/', (req,res) => {
    res.send("Hello world")
})

app.get("/trial", (req, res) => {
  res.send("This is a trial Message");
});
app.post('/add', async (req, res) => {
    try {
        await empmodel(req.body).save()
        res.send({message:"data added"})
    } catch (error) {
        console.log(error)
    }
})
//api creation
app.get('/view', async (req, res) => {
    try {
        const employee=await empmodel.find()
        res.send(employee)
    } catch ( error ) {
        console.log(error)
    }
})
app.delete('/remove/:id', async (req, res) => {
    try {
        await empmodel.findByIdAndDelete(req.params.id)
        res.send({ message: "data deleted" })
    } catch (error) {
        console.log(error)
        }
})
app.put('/update/:id', async (req, res) => {
    try {
        await empmodel.findByIdAndUpdate(req.params.id,req.body)
        res.send({message:"data updated"})
    } catch (error) {
        console.log(error)
    }
})
//port setting
app.listen(3004, () => {
        console.log('Server is running on port 3004')
})
    


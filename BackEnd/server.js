const express = require('express')
const app = express()
const port = 4000 //client and server run on diffrent ports
const cors = require('cors') //import cors
const bodyParser = require('body-parser');//import bodyParser
const mongoose = require('mongoose');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors())
//resource sharing with other domains
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Connection server to mongodb
const myConnectionString = 'mongodb+srv://admin:kacper@cluster0.drcyc.mongodb.net/foods?retryWrites=true&w=majority';
mongoose.connect(myConnectionString, { useNewUrlParser: true })

const Schema = mongoose.Schema;//define Schema

var foodSchema = new Schema({//telling schema what your going to store
    foodType: String,
    price: Number,
    foodID: String,
    image: String
})

var FoodModel = mongoose.model("food", foodSchema)

//getting data from api food api as json data
app.get('/api/foods', (req, res) => {
    FoodModel.find((err, data) => {
        res.json(data);
    })
})

//get food id as json data
app.get('/api/foods/:id', (req, res) => {
    FoodModel.findById(req.params.id, (err, data) => {
        res.json(data)
    })
})

app.get('/api/foods/:special', (req, res) => {
    if (req.params.special == true) {
        FoodModel.findOne(req.params.special, (err, data) => {
            res.json(data)
        })
    }

})

//puts food id in api and updates the request
app.put('/api/foods/:id', (req, res) => {
    FoodModel.findByIdAndUpdate(req.params.id,
        req.body,
        (err, data) => {
            res.status(201).send(data);
        })
})

//delete data by food id
app.delete('/api/foods/:id', (req, res) => {

    FoodModel.findByIdAndDelete({ _id: req.params.id },
        (err, data) => {
            res.send(data);
        })
})

//listen to server port end send this to client
app.post('/api/foods', (req, res) => {
    console.log('Food Recieved')
    FoodModel.create({
        foodType: req.body.foodType,
        price: req.body.price,
        image: req.body.image,
        special: req.body.special
    })

    res.send('Item Added');//confirms that the food has been added
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
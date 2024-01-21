import express from 'express'
import cors from "cors";
import mongoose, { Schema } from 'mongoose';
const app = express()
const port = 3100
app.use(cors())
app.use(express.json())
const productSchema = new Schema({
    img: String,
    name: String,
    price: Number
});

const productModel = mongoose.model('products', productSchema);

app.get('/products', async (req, res) => {
    const products = await productModel.find({})
    res.send(products)
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params
    const product = await productModel.findById(id)
    res.send(product)
})

app.post('/products', async (req, res) => {
    const { img, name, price } = req.body
    const newProduct = new productModel({ img, name, price })
    await newProduct.save()
    res.send('Got a POST request')
})

app.put('/products/:id', async (req, res) => {
    const { id } = req.params
    const { img, name, price } = req.body
    const product = await productModel.findByIdAndUpdate(id, { img, name, price })
    res.send('Got a PUT request at /')
})

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params
    const product = await productModel.findByIdAndDelete(id)
    res.send('Got a DELETE request at /')
})

mongoose.connect('mongodb+srv://qulam:qulam777@cluster0.4zefuvj.mongodb.net/')
    .then(() => console.log('Connected!'))
    .catch(() => console.log('Not Connected!'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
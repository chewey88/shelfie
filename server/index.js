const express = require('express')
const massive = require('massive')


require('dotenv').config()
const app = express()

const {SERVER_PORT, CONNECTION_STRING} = process.env
const productCtrl = require('./controllers/productController')
app.use(express.json())


app.get('/api/products', productCtrl.getProducts)
app.post('/api/products', productCtrl.addNewProduct)
app.put('/api/products/:id', productCtrl.editProduct)
app.delete('/api/products/:id', productCtrl.deleteProduct)

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    },
}).then(db => {
    app.set('db', db)
    console.log('DB Connected')
    app.listen(SERVER_PORT, () => {console.log(`Running on Port ${SERVER_PORT}`)})
})
.catch(err => console.log(err))

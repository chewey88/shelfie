

module.exports = {
    addNewProduct: (req, res) => {
        const db = req.app.get('db')
        const {name, price, img} = req.body

        db.add_product([name, price, img])
        .then(newProduct => res.status(200).send(newProduct))
        .catch(err => console.log('addNewProduct', err))
    },
    getProducts: (req, res) => {
        const db = req.app.get('db')

        db.get_products()
        .then(products => res.status(200).send(products))
        .catch(err => console.log('getProducts', err))
    },
    editProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {name, price, img} = req.body

        db.edit_product([id, name, price, img])
        .then(editedProduct => res.status(200).send(editedProduct))
        .catch(err => console.log(err))
    },
    deleteProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params

        db.delete_product([id])
        .then(() => res.sendStatus(200))
        .catch(err => console.log(err))
    },
}
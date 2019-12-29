const products = require('../products.json');

const getProduct = (req, res) => {
    const item = products.find(val => val.id === parseInt(req.param.id));
    if(!item){
        return res.status(500).json('Item not in list')
    }
    res.status(200).json(item)
}

module.exports = getProduct
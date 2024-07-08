const fs = require("fs");
const produtos = require("../data/produtos.json");


const getProdutos = (req, res) =>{
    res.send(produtos);
}

module.exports = {
    getProdutos
}
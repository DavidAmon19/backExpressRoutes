const fs = require("fs");
const path = require("path");
const produtos = require("../data/produtos.json");


const getProdutos = (req, res) =>{
    res.send(produtos);
}


const getProdutosById = (req, res) =>{
    const idParams = req.params.id;

    const produtoById = produtos.find((item) => item.id == idParams);

    if(produtoById){
        res.send(produtoById);
    } else{
        res.send("Produto não encontrado");
    }
}

const createProduto = (req, res) =>{
    const novoProduto = req.body;
    produtos.push(novoProduto);
    escreverDados(produtos)

    res.send(novoProduto);

}

const updateProduto = (req, res) =>{
    const idProduto = req.params.id;
    const indiceProduto = produtos.findIndex((novoProduto)=> novoProduto.id == idProduto);

    if(indiceProduto !== -1){
        const produtoAtualizado = req.body;
        produtos[indiceProduto] = produtoAtualizado;
        escreverDados(produtos);
        res.send(produtoAtualizado);
    } else {
        res.send("Produto não encontrado");
    }


}

const deletarProduto = (req,res) =>{
    const idProduto = req.params.id;

    const novoArray = produtos.filter((cada)=> cada.id != idProduto);

    escreverDados(novoArray);

    res.send(novoArray);
}



const escreverDados = (produtos) =>{

    fs.writeFileSync(path.join(__dirname,'../data/produtos.json'), JSON.stringify(produtos), 'utf-8');
}



module.exports = {
    getProdutos,
    getProdutosById,
    createProduto,
    updateProduto,
    deletarProduto
}
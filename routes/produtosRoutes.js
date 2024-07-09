const express               = require("express");
const router                = express.Router();
const produtosController    = require("../controllers/produtosController");

router.get('/', produtosController.getProdutos);
router.get('/:id', produtosController.getProdutosById);
router.post('/', produtosController.createProduto);
router.put('/:id', produtosController.updateProduto);
router.delete('/:id', produtosController.deletarProduto);



module.exports = router;
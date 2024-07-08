const express          = require('express');
const produtosRoutes   = require('./routes/produtosRoutes');
const app              = express();
const port             = 9090;

app.use(express.json());


app.get('/', (req, res)=>{
    res.send("Uma api para testar");
})

app.use('/produtos',produtosRoutes);

app.listen(port, ()=>{
    console.log(`Servidor rodando no endereço http://localhost:${port}`)
})

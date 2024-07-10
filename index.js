const express          = require('express');
const cors             = require('cors'); 
const produtosRoutes   = require('./routes/produtosRoutes');
const app              = express();
const port             = 9090;

app.use(express.json());
app.use(cors());

app.get('/', (req, res)=>{
    res.send("Uma api para testar");
})

app.use('/produtos',produtosRoutes);

app.listen(port, ()=>{
    console.log(`Servidor rodando no endereço http://localhost:${port}`)
})


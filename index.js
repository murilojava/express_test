const express = require('express')
const app = express()
const port = 3000

const products = [
    {id:1, name:"teste1", value:10.25},
    {id:2, name:"teste2", value:29.25},
    {id:3, name:"teste3", value:30.11},
]

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/products', (req, res) =>{
    return res.json(products);
});

app.post('/product', (req, res) =>{
    console.log(req.body);

    const produtoNovo = req.body;
    produtoNovo.id = products.length + 1;
    products.push(produtoNovo);

    
    return res.json(products);
});

app.delete('/product/:id', (req, res) =>{
    console.log(req.params.id);


    products.splice(req.params.id, 1);

    return res.json(products);
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
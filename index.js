const express= require('express');
const product= require('./api/product')
const app= express();
app.get('/', (req, res) => res.send('your api is ok! fine man') )

app.use('/api/product', product)
const PORT= process.env.PORT || 10101
app.listen(PORT, () => console.log(`App is running on localhost:${PORT} `) )
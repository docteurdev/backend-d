const express= require('express');
const product= require('./api/product')
const app= express();
const sequelize= require("./src/db/sequelize");

sequelize.connectDb()
app.get('/', (req, res) => res.send('your api is ok! fine man') )
require('./src/routes/getAll')(app);
app.use('/api/product', product)
const PORT= process.env.PORT || 10101
app.listen(PORT, () => console.log(`App is running on localhost:${PORT} `) )
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const { router } = require("./routes.js");

async function main(){
    dotenv.config();
    const port = process.env.PORT;
    const db = process.env.DB;

    const app = express();

    try{
        await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, (err, res)=> {
            console.log('Conexión a la base de datos establecida...') });
        } catch (err){
            handleError(err);
        }
    
    app.use(router);
    app.listen(port, () => console.log(`Servidor escuchando en el puerto ${port}`));
}

main();

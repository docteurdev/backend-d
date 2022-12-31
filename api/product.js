const express= require('express');
const router= express.Router();

router.get("/", (req, res) =>{
    res.send({name:"oumar", prenom: "Adje"})
})

module.exports= router
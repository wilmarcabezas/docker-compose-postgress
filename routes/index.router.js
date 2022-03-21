const {Router} = require("express");
const router = Router();
const {getUsers} = require('../services/read.data');

router.get('/', 
async (req, res, next) => {
    try
    {
        res.status(201).json(await getUsers());
    }
    catch(error)
    {
        console.log(error);
        res.status(401).send(error);        
    }   
});

module.exports=router;

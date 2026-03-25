const express =require('express');
const router =express.Router();
const menuitem =require('./../models/menuitem');

router.post('/',async (req,res)=>{
    try{
        const data =req.body
        const newmenu=new menuitem(data)
        const response=await newmenu.save()
        console.log('data saved')
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'}); 
    }
})

module.exports = router;
const express =require('express');
const router =express.Router();
const person =require('./../models/person'); 

router.post('/',async (req,res)=>{
    try{
        const data =req.body //assuming the request body contains the person data
        
        //create a new person document using the mongoose model
        const newperson =new person(data);

        //save the new person to the database
        const response =await newperson.save();
        console.log('data saved')
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});
    }
})

router.get('/',async (req,res)=>{
    try{
        const data = await person.find();
        console.log('data fetched')
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});

    }
})

router.get('/:worktype',async (req,res)=>{
    try{
        const worktype =req.params.worktype;//extract the work type from the url parameter
        if(worktype =='chef'|| worktype =='manager'||worktype=='waiter'){
            const response = await person.find({work:worktype})
            console.log('response fetched')
            res.status(200).json(response)
        }else{
            res.status(404).json({error:'invalid worktype'})
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});

    }
})

router.put('/:id',async (req,res)=>{
    try{
        const personid =req.params.id;//extract the id from the URL parameter
        const updatedpersondata =req.body;//updated data for person

        const response =await person.findByIdAndUpdate(personid,updatedpersondata,{
            new:true,//return the updated doc
            runValidators:true,//run mongoose validation
        })

        if(!response){
            return res.status(404).json({error: 'person not found'});
        }
        console.log('data updated');
        res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});
    }
})

router.delete('/:id', async(req, res)=>{
    try{
        const personid =req.params.id;//extract the id from the URL parameter

        //asuming you have a person model
        const response=await person.findByIdAndDelete(personid);

            if(!response){
            return res.status(404).json({error: 'person not found'});
        }

        console.log('data deleted');
        res.status(200).json({message: 'person deleted successfully'});


    }catch(err){         
        console.log(err);
        res.status(500).json({error:'internal server error'});

    }
})

module.exports = router;
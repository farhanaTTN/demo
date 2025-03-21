import express from "express"
import { getAllEmployees } from "../services/employee.js"

const router  = express.Router();

router.get("/",async(req,res)=>
{
    try{
        const response = await getAllEmployees();
        if(response.success)
        {
            return res.status(200).send({data:response.data})
        }
        else throw new Error("error in get api");

    }catch(err)
    {
        console.log("error in controller catch",err)
        return res.status(400).send({message : err.message || ""})

    }
})

export default router;
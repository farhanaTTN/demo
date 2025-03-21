import express from 'express'
import passport from '../services/passport.js'

const router =express.Router()

router.get('/google',passport.authenticate('google', {
    scope : ['email' ,'profile']
}))
router.get('/google/callback',passport.authenticate('google',{
    session :false,
    //successReturntoRedirect
}),
    async(req, res)=>
    {
        try{
            console.log("success",req.user)
            res.redirect('http://localhost:4000?token=12234')
        }catch(err)
        {
            console.log("catch block of google callback",err)
        }
    }
)



export default router;
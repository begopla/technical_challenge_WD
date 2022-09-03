const express = require("express")
const router = express.Router()
const Phone = require('../models/Phone.model')


/* routes prefixed with /phones */


//Display list of phones
router.get("/", async(req, res, next) =>{
    try {
        const phones = await Phone.find()
        return res.status(200).json(phones)
    } catch (error) {
      next(error)  
    }

})

//Display phone detail

router.get("/:id", async (req, res, next) =>{
    try {
        const {id} =req.params
        const phone = await Phone.findById(id)

        return res.status(200).json(phone)
    } catch (error) {
        
    }
})



module.exports = router;
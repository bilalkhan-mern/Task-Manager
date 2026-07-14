const Task = require("../models/schema")

const getSingleData = async (req,res) => {
    try{
        const id = req.params.id
        const result = await task.findById(id)
        res.status(200).json(result)
    }
    catch(err){
        console.log(err)
    }
}
module.exports = {getSingleData}

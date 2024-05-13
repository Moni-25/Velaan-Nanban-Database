const AdminModel = require("../Models/adminModel");

function getAdmin(req, res, next)
{
    AdminModel.find()
    .then((response) => {
        if(response && response.length > 0)
        {
            return res.status(201).json({
                success: true,
                data: response,
                message: "Admin Accessed Successfully!!!!",
                length: response.length
            });
        }
        else{
            return res.status(500).json({
                success: false,
                message: "Admin Not found",
            });
        }
    })
    .catch((error) => {
        if(error){
            res.status(400).json({
                success: true,
                message: "Something went wrong???",
                error: error
            })
        }
    })
}


module.exports = {
    getAdmin
}
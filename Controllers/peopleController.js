const PeopleModel = require("../Models/peopleModel");

function createPeopleAccount(req, res, next)
{
    const payload = req.body;
    const People = PeopleModel(payload);

    People.save()
        .then((response) => {
            if(response && response._id)
            {
                return res.status(201).json({
                    success: true,
                    message: "People Account Created Successfully!!!"
                });
            }
            else{
                return res.status(500).json({
                    success: false,
                    message: "Something Went Wrong???"
                });
            }
        })
        .catch((error) => {
            if(error){
                console.log(error);
                return res.status(400).json({
                    success: false,
                    error: error
                })
            }
        })
}

function getAllPeople(req, res, next)
{
    PeopleModel.find()
        .then((response) => {
            if(response && response.length > 0)
            {
                return res.status(201).json({
                    success: true,
                    data: response,
                    message: "People Fetched Successfully!!!!",
                    length: response.length
                });
            }
            else{
                return res.status(500).json({
                    success: true,
                    message: "No People found",
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
    createPeopleAccount,
    getAllPeople,
}
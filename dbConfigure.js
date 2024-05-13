const mongoose = require("mongoose");

// Create connection between mongodb and node js

async function connectDatabase()
{
    try{
        const response = await mongoose.connect(
            //"mongodb://localhost:27017/student_task_submission"
            "mongodb+srv://Monica25:rZzdEHiZMVs3B9LA@mentordb.deugo1z.mongodb.net/velaan_nanban"
            );
        //console.log(response);
        if(response.connections.length > 0){
            console.log("Database Connection Established Successfully!!!!");
        }
        else{
            throw new Error("Connection Unsuccessful");
        }
    }
    catch(e){
        console.log(e);
    }
}

module.exports = {
    connectDatabase,
}
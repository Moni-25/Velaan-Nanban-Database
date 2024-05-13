const mongoose = require("mongoose");

const PeopleSchema = mongoose.Schema({
    peopleFullName:{
        type: String,
        required: true
    },
    people_email:{
        type: String,
        required: true
    },
    people_user:{
        type: String,
        required: true
    },
    people_pass:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: String,
        required: true
    },
    addressDetails:{
        addressLine:{
            type: String,
            required: false
        },
        town:{
            type: String,
            required: false
        },
        city:{
            type: String,
            required: false
        },
        state:{
            type: String,
            required: false
        },
        pincode:{
            type: String,
            required: false
        }
    },
});

const PeopleModel = mongoose.model("people", PeopleSchema);
module.exports = PeopleModel;
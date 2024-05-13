const mongoose = require("mongoose");

const AdminSchema = mongoose.Schema({
    admin_user: {
        type: String,
        required: true
    },
    admin_pass: {
        type: String,
        required: true
    }
})

const AdminModel = mongoose.model("admins", AdminSchema);
module.exports = AdminModel;
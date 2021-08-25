const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    phone: String,
    website: String,
    social: String,
    address: String
});

const userSchema = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    contact: [contactSchema]
});

const userModel = new mongoose.model("user", userSchema);
const contactModel = new mongoose.model("contact", contactSchema);

module.exports = { userModel, contactModel };
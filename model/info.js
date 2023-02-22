const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    Name: {type: String},
    Phone: {type: Number},
    Email: {type: String},
    // Password: {type: String},
    Address: {type: String},
    Country: {type: String},
    Gander: {type: String},
    Grade: {type: Number},
    Passingyear: {type: Number},
    Course: {type: String},
    Projectlink: {type: String},
    Projectdes: {type: String},
    Skill: {type: String}
})

module.exports = mongoose.model('Info', userSchema);
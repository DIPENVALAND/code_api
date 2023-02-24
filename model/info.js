const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    Name: {type: String},
    Email: {type: String},
    Phone: {type: Number},
    Address: {type: String},
    Country: {type: String},
    Gender: {type: String},
    School: {type: String},
    Score: {type:String},
    Years: {type:String},
    Collages: {type:String},
    Course: {type: String},
    Grade: {type: Number},
    Passingyear: {type: Number},
    Project: {type:String},
    Plink: {type: String},
    Pd: {type: String},
    Skill: {type: String},
    Git: {type:String},
    Linkdin: {type:String},
    Facebook: {type:String}
})

module.exports = mongoose.model('Info', userSchema);
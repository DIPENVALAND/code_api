const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    Username: {type: String},
    Email: {type: String},
    Password: {type: String},
    roleid: {type:String}
})

module.exports = mongoose.model('Loginuser', userSchema);
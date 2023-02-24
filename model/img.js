const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileSchema = new mongoose.Schema({
    originalname: String,
    mimetype: String,
    size: Number,
    path: String,
    url: String
});

module.exports = mongoose.model('Files', fileSchema);
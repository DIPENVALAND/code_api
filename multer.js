const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');


// Configuration 
cloudinary.config({
  cloud_name: "dj4najw7m",
  api_key: "181935988532312",
  api_secret: "vMQQoLtvTcJryTBvdBrO8wFE4Us"
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'CODELITE'
  }
});


  const upload = multer({ storage: storage });
  module.exports = upload
require('dotenv').config();
const mongoose=require('mongoose');

const URL=process.env.MONGODB;

const cnn=() => {
    mongoose.connect(URL).then(() => console.log('MongoDB Connected...'));
}

module.exports=cnn;
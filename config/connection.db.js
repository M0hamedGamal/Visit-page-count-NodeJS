const mongoose = require('mongoose');

// 'mongodb://localhost:27017/origin' // Local Mongo URI

const connectionDB = () => {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log('DB is connected...')
    }).catch((err) => {
        console.error(err)
    });
}

module.exports = connectionDB



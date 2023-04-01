const mongoose = require('mongoose')
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('gọi db thành công')
    }
    catch (error) {
        console.log('chưa kết nối thành công')
    }
}
module.exports = { connect }
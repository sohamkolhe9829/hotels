const mongoose = require('mongoose')

//Mongo db URL
const mongoURL = 'mongodb://localhost:27017/hotels'


//setting connection to mongo db
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;


//listerns
db.on('connected', () => {
    console.log('Connected to MongoDB server');
})
db.on('error', (err) => {
    console.log('Error to connect MongoDB server ', err);
})



module.exports = db;
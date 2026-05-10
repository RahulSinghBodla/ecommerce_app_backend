const mongoose = require("mongoose")
require("dotenv").config()
const mongo_URI = process.env.MONGODB

async function initializeDatabase(){
    await mongoose.connect(mongo_URI,{dbName: 'Majorproject1'})
    .then(console.log("Database has been connected successfully."))
    .catch((err)=> console.log("error while connecting to db."))
}

module.exports = {initializeDatabase}
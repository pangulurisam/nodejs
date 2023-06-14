const mongoose = require("mongoose")
const connectionString = "mongodb+srv://pnikky2002:Pnikky2002@sangeeth.ira9c1g.mongodb.net/devlopmentdatabase"

module.exports.connectMongoDB = function() {
    mongoose
        .connect(connectionString, {})
        .then(()=> {
            console.log("Connected to MongoDB")
        })
        .catch((err)=> {
            console.log(err)
        })
}
// establish connection between application and database
const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then( () => console.log("DB Connection Successfull"), {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .catch( (error) => {
        console.log("DB Connection failed");
        console.error(error.message);
        process.exit(1);
    } )
}

module.exports = dbConnect;
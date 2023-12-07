// import
const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/database");
const blog = require("./routes/blog");

const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(express.json());

// mount
app.use("/api/v1", blog);

// connect to database
dbConnect();

// server started
app.listen(port, () => {
    console.log(`server established at port ${port}`);
});

// default route
app.get("/", (req, res) => {
    res.send("<h1>BLOG APP</h1>")
});

// import mongoose
const mongoose = require("mongoose");

// route handler
const commentSchema = new mongoose.Schema({
    // post on which user is commenting
    post: {
        type: mongoose.Schema.Types.ObjectId, // id of the post
        ref: "Post" // reference to the post model
    },

    // which user has commented
    user: {
        type: String,
        required: true
    },

    // comment
    body: {
        type: String,
        required: true
    }
});

// export
module.exports = mongoose.model("Comment", commentSchema);
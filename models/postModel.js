// import 
const mongoose = require("mongoose");

// route handler
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },

    // array of likes
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like"
    }],

    // array of comments
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
});

// export
module.exports = mongoose.model("Post", postSchema);
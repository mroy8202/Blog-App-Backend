// import mongoose
const mongoose = require("mongoose");

// route handler
const likeSchema = new mongoose.Schema({
    // the post whick user is liking
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    },

    // user who is liking the post
    user: {
        type: String,
        required: true
    }
});

// export
module.exports = mongoose.model("Like", likeSchema);
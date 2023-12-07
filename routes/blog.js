const express = require("express");
const router = express.Router();

// import controllers
const { createComment } = require("../controller/commentController");
const { createPost } = require("../controller/postController")

// create mapping
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);

// export
module.exports = router;
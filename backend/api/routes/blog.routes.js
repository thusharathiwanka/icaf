const express = require("express");
const router = express.Router();
const {
	getAllBlogs,
	saveBlog,
	getBlog,
} = require("../controllers/blog.controller");

router.get("/", getAllBlogs);
router.post("/", saveBlog);
router.get("/:id", getBlog);

module.exports = router;

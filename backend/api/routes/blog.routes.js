const express = require("express");
const router = express.Router();
const { getAllBlogs, saveBlog } = require("../controllers/blog.controller");

router.get("/", getAllBlogs);
router.post("/", saveBlog);

module.exports = router;

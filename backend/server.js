const express = require("express");
const app = express();
require("./api/config/db.config");
const PORT = require("./api/config/server.config");
const userRoutes = require("./api/routes/user.routes");
const blogRoutes = require("./api/routes/blog.routes");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRoutes);
app.use("/blogs", blogRoutes);

app.get("/", (request, response) => {
	response.send("Home");
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));

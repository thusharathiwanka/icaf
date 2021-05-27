const express = require("express");
const app = express();
const userRoutes = require("./api/routes/user.routes");
require("./api/config/db.config");

// Middleware
app.use("/users", userRoutes);

app.get("/", (request, response) => {
	response.send("Hello");
});

app.listen(3000);

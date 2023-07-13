const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const configRoutes = require("./routes.js");
configRoutes(app);

app.listen(3001, () => {
    console.log("Server running on http://localhost:3001");
});

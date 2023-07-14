const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

require("dotenv").config();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const configRoutes = require("./routes.js");
configRoutes(app);

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});

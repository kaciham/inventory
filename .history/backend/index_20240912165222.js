const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const app = express();

mongoose.connect(process.env.)
app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`)
})


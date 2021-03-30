const Discord = require('discord.js');
require('dotenv').config();

const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))

app.post("/netlify", (req, res) => {
    console.log(req.body) // Action
    res.status(200).end() // Response
  })  
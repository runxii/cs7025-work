const express = require("express");
const path = require("path");const PORT = 8000; // set port to 8000
const app = express();

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/index.html"));
});

// listen
app.listen( PORT, () => {
    console.log( "App running on http://localhost:" + PORT );
});
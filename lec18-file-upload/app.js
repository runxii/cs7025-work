const express = require("express");
const path = require("path");
const session = require("express-session");
const PORT = 8000; // set port to 8000

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./src/views"));

// 路由引入
const indexRoutes = require("./src/routes");

app.use("/", indexRoutes);

// listen
app.listen( PORT, () => {
    console.log( "App running on http://localhost:" + PORT );
});

// enable to upload file
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set the session
app.use(
    session({
        secret:"The app is for uplpading files",
        resave: false,
        saveUninitialized: false,
    })
);
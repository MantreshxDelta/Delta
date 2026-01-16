// Important code
const express = require("express");
const app = express();

const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("view.ejs")
})

app.listen(port, () => {
    console.log(`Listening to port: ${port}`);
});
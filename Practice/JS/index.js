const express = require("express")
const app = express();
const path = require("path")

app.set("views", path.join(__dirname,"..", "views"))
app.use(express.static(path.join(__dirname, "..", "CSS")))

app.set("view engine", "ejs")

let port = 8080;

app.listen(port, () => {
    console.log("listening to port")
})

app.get("/", (req, res) => {
    res.render("home")
})
const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/Bootstrap_Assessment", express.static("Bootstrap_Assessment"));
app.use("/CSS_Assessment", express.static("CSS_Assessment"));
app.use("/HTML_BasicCSS_Assessment", express.static("HTML_BasicCSS_Assessment"));
app.use("/JavaScript_Basics_Assessment/activity_1", express.static("JavaScript_Basics_Assessment/activity-1"));
app.use("/JavaScript_Basics_Assessment/activity_2", express.static("JavaScript_Basics_Assessment/activity-2"));
app.use("/JavaScript_Basics_Assessment/activity_3", express.static("JavaScript_Basics_Assessment/activity-3"));
app.use("/Module-1_Assessment", express.static("Module-1_Assessment"));
app.use("/Module-2_Assessment", express.static("Module-2_Assessment"));

app.get("/Bootstrap_Assessment", function(req, res) {
    res.sendFile(path.join(__dirname, "./Bootstrap_Assessment/index.html"));
});

app.get("/CSS_Assessment", function(req, res) {
    res.sendFile(path.join(__dirname, "./CSS_Assessment/index.html"));
});

app.get("/HTML_BasicCSS_Assessment", function(req, res) {
    res.sendFile(path.join(__dirname, "./HTML_BasicCSS_Assessment/index.html"));
});

app.get("/JavaScript_Basics_Assessment/activity_1", function(req, res) {
    res.sendFile(path.join(__dirname, "./JavaScript_Basics_Assessment/activity-1/activity-1.html"));
});

app.get("/JavaScript_Basics_Assessment/activity_2", function(req, res) {
    res.sendFile(path.join(__dirname, "./JavaScript_Basics_Assessment/activity-2/activity-2.html"));
});

app.get("/JavaScript_Basics_Assessment/activity_3", function(req, res) {
    res.sendFile(path.join(__dirname, "./JavaScript_Basics_Assessment/activity-3/activity-3.html"));
});

app.get("/Module-1_Assessment", function(req, res) {
    res.sendFile(path.join(__dirname, "./Module-1_Assessment/index.html"));
});

app.get("/Module-2_Assessment", function(req, res) {
    res.sendFile(path.join(__dirname, "./Module-2_Assessment/index.html"));
});

// app.get("*", function(req, res) {
//     res.send("Sorry, invalid route");
// });


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
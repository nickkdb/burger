let express= require("express");
let burger= require("../models/burger");
let path= require("path");

let router= express.Router();

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

router.get("/burgers", (req, res) => {
burger.all(data => {
    res.json({ burgers: data})
    });
});

router.post("/burgers", (req, res) => {
    burger.create([
        "burger_name", "devoured"
    ], [
        `"${req.body.name}"`, req.body.devoured
    ], (data) => {
        res.json({ burgers: data})
    });
})

module.exports= router;
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
});

router.put("/burgers/:id", (req, res) => {
    let condition= req.params.id;
    console.log(condition);

    burger.update(req.body.devoured, condition, (data) => {
        if (data.changedRows== 0) {
            return res.status(404).end();
        } else {
            res.json({ id: req.params.id});
        }
    });
});

router.delete("/burgers/:id", (req, res) => {
    let id= req.params.id;

    burger.delete(id, (data) => {
        if (data.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.json({id: req.params.id});
        }
    })
})

module.exports= router;
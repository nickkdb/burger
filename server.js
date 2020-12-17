var express= require("express");

let PORT= process.env.PORT || 8080;

let app= express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

let routes = require("./controllers/burgers_controller");

app.use(routes);

app.listen(PORT, () => {
    console.log("Sever listening on: http://localhost:" + PORT);
});
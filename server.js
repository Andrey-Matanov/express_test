const express = require("express");

const app = express();

app.get("/", (req, res) => {
    console.log(req);

    res.json("ok");
});

app.post("/", (req, res) => {
    console.log(req);

    res.json("ok");
});

app.listen(3000, () => {
    console.log("Server is listening on localhost:3000");
});

import express from "express";
const app = express();
const port = 8000;

import tool from "./tool.js";

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers");
    next();
});

app.post("/tools", (req, res) => {
    console.log("peticion http");
    tool.createTool()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
});

app.listen(port, () => {
    console.log("postgres-api is running successfully")
});
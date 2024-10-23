import express from "express";
const app = express();
app.listen(8080);
const logger = (req, res, next) => {
  req.msg = "Hello World";
  next(); 
};

app.use(logger);

app.get("/", (req, res) => {

    res.send(req.msg);
});

app.get("/home", (req, res) => {

    res.send(req.msg);
});
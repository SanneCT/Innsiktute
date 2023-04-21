const express = require("express");
const morgan = require("morgan");

const app = express();
app.listen(3000);

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

app.get("/", (req, res) => {
  res.render("index", { title: "Hjem" });
});

app.get("/deltagere", (req, res) => {
  res.render("deltagere", { title: "Deltagere" });
});

app.get("/grundere", (req, res) => {
  res.render("grundere", { title: "Grundere" });
});
app.get("/turer", (req, res) => {
    res.render("turer", { title: "Turer" });
  });

// app.use((req, res) => {
//   res.status(404).render("404", { title: "404" });
// });

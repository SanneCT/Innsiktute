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

app.get("/basisprogram", (req, res) => {
  res.render("basisprogram", { title: "Basisprogram" });
});

app.get("/jobb", (req, res) => {
  res.render("jobb", { title: "Skole- og jobbkordinering" });
});

app.get("/oss", (req, res) => {
  res.render("oss", { title: "Om oss" });
});

app.get("/kontakt", (req, res) => {
  res.render("kontakt", { title: "Kontakt oss" });
});

// app.use((req, res) => {
//   res.status(404).render("404", { title: "404" });
// });

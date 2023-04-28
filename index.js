const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const categories = require("./data/categories.json");
const news = require("./data/news.json");
const cors = require("cors");

app.use(cors());
app.get("/categories", (req, res) => {
  res.send(categories);
});
app.get("/categories/:id", (req, res) => {
  const id = req.params.id;
  if (id == 0) {
    res.send(news);
  } else {
    const category = news.filter((n) => n.category_id === id);
    res.send(category);
  }
});
app.get("/news", (req, res) => {
  res.send(news);
});
app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((n) => n._id === id);
  res.send(selectedNews);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

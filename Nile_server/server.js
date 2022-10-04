import express from "express";
import data from "./data.js";
const app = express(); // creating object app using express function
app.get("/api/products", (req, res) => {
  res.send(data.products); // send back data to front end
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started at port : ${port} `);
});

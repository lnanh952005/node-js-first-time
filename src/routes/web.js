
const router = require('express').Router();

router.get("/", (req, res) => {
  res.render("sample.ejs");
});

router.get("/hello", (req, res) => {
  res.send("hello world");
}); 

module.exports = router;

const router = require("express").Router();
const bookRoutes = require("./books");
const nyt = require("./nyt");

// Book routes
router.use("/books", bookRoutes);
router.use("/nyt", nyt);


module.exports = router;

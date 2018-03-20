const router = require("express").Router();
const bookRoutes = require("./books");
const noteRoutes = require("./notes");
const articleRoutes = require("./articles");

// Book routes
router.use("/books", bookRoutes);
router.use("/notes", noteRoutes);
router.use("/article", articleRoutes);


module.exports = router;

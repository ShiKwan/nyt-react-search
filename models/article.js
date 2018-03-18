const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: { type: String, required: true },
    teaser: {type: String, required: true },
    link : {type: String, required: true },
    date: { type: Date, default: Date.now }
});

const Article = mongoose.model("Article", bookSchema);

module.exports = Article;

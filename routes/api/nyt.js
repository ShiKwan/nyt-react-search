const router = require("express").Router();

const API_KEY = '7efd7705bed343d498f6b717ffda6638';

router.route('/', (req, res) => {
    axios
        .get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=7efd7705bed343d498f6b717ffda6638"+"&q=" + req.query)
        .then(({data: {results}}) => {
            console.log(results);
            res.json(results);})
        .catch(err => res.status(422).json(err));
});

module.exports = router;

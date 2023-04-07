var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    const date = new Date();
    res.json({ year: `${date.getFullYear()}` });
});

module.exports = router;
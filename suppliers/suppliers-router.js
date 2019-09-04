const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('/suppliers/');
});

router.get('/name', (req, res) => {
    const name = Luis
    res.send(`${name}`);
});

module.exports = router;
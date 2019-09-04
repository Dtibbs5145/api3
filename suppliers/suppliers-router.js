const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('/suppliers/');
});

router.get('/:name', (req, res) => {
    res.send(`/suppliers/${req.params.name}`);
});

module.exports = router;
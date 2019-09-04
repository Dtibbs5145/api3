const router = require('express').Router();

function uppercase(req, res, next) {
    const name = req.params.name;
    if (name) {
        req.name = name.toUpperCase();
    }
    //this sends the request to the next middleware (or route handler)
    next();
}

router.get('/', (req, res) => {
    res.send('/suppliers/');
});

router.get('/:name', uppercase, (req, res) => {
    //expess needs to know  there is a url parameter to collect
    res.send(`/suppliers/${req.name}`);
});

module.exports = router;
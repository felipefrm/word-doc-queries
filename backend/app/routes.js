const { Router } = require('express');

const routes = new Router();

routes.get('/', (req, res) => {
    res.json({message: "netLex backend test!"});
})

module.exports = routes;
const { Router } = require('express');
const routes = new Router();
const checkLogin = require("../middlewares/auth.login");
const Document = require("../models/document");
const DocumentHelper = require("../helpers/document.helper");

routes.post(`/documents/word-frequency`, checkLogin, async (req, res) => {
    if (!req.body?.word) {
        return res.status(400).json({ error: "Invalid request body" });
    }

    if (typeof (req.body.word) !== 'string') {
        return res.status(400).json({ error: "Field must be a string" });
    }

    const document = await Document.findOne();
    const result = DocumentHelper.wordFrequency(document.content, req.body.word);
    res.json(result);
});

routes.post(`/documents/word-sentences`, checkLogin, async (req, res) => {
    if (!req.body?.word) {
        return res.status(400).json({ error: "Invalid request body" });
    }

    if (typeof (req.body.word) !== 'string') {
        return res.status(400).json({ error: "Field must be a string" });
    }

    const document = await Document.findOne();
    const result = DocumentHelper.wordSentences(document.content, req.body.word);
    res.json(result);
});

routes.post(`/documents/top-words`, checkLogin, async (req, res) => {
    if (!req.body?.count || !req.body?.minWordLength) {
        return res.status(400).json({ error: "Invalid request body" });
    }

    console.log(!!Number(req.body.count))

    if (!Number(req.body.count) || !Number(req.body.minWordLength)) {
        return res.status(400).json({ error: "Fields must be an number" });
    }

    const document = await Document.findOne();
    const result = DocumentHelper.topWords(document.content, req.body.count, req.body.minWordLength);
    res.json(result);
});

module.exports = routes;
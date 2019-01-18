const express = require('express');
const router = express.Router();
const fileService = require('./file.service');

// routes
router.get('/:id', getByUserId);
router.post('/', addfile);

module.exports = router;


function getByUserId(req, res, next) {
    fileService.getById(req.params.id)
        .then(data => data ? res.json(data) : res.sendStatus(404))
        .catch(err => next(err));
}

function addfile(req, res, next) {
    console.log('test');
    fileService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}



/**
 * Created by heavenduke on 9/27/15.
 */
var express = require('express');
var dao = require('../controllers').dao.error;
var service = require('../controllers').service.error;
var router = express.Router({
    mergeParams: true
});

router.get('/error', service.list);

router.get('/error/:errorId', service.detail);

router.post('/error', service.create);

module.exports = router;
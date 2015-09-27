/**
 * Created by heavenduke on 9/27/15.
 */
var express = require('express');
var dao = require('../controllers').dao.chapter;
var service = require('../controllers').service.chapter;
var router = express.Router({
    mergeParams: true
});

module.exports = router;
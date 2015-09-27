/**
 * Created by heavenduke on 9/27/15.
 */
var express = require('express');
var dao = require('../controllers').dao.user;
var service = require('../controllers').service.user;
var router = express.Router({
    mergeParams: true
});

router.post('/logout', dao.logout);

module.exports = router;
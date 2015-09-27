var Error = require('../utils/Error');
var Authentication = require('../utils/Authentication');
var express = require('express');
var router = express.Router({
  mergeParams: true
});
var modules = {
  user: require('./user'),
  error: require('./error'),
  correction: require('./correction'),
  chapter: require('./chapter')
};

router.get('/user/login', Authentication.unAuthentication, require('../controllers').service.user.loginView);
router.post('/user/login', Authentication.unAuthentication, require('../controllers').service.user.loginAction);

router.use('/user', modules.user);
router.use('/error', modules.error);
router.use('/correction', modules.correction);
router.use('/chapter', modules.chapter);

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Seer勘误系统', user: req.session.user});
});

module.exports = router;
const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.post.get);

router.post('/', auth(), controllers.post.post);

router.delete('/:id', auth(), controllers.post.delete);

module.exports = router;
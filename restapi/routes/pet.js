const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.recipes.get);

router.post('/', auth(), controllers.recipes.post);

router.delete('/:id', auth(), controllers.recipes.delete);

module.exports = router;
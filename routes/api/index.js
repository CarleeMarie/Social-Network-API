const router = require('express').Router();
const thoughtsApi = require('./thoughtsApi');
const usersApi = require('./usersApi'); 

router.use('/thoughts', thoughtsApi);
router.use('/users', usersApi);

module.exports = router;
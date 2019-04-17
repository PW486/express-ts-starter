import express from 'express';

const router = express.Router();
router.use('/v1/user', require('./router'));

module.exports = router

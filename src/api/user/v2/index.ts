import express from 'express';

const router = express.Router();
router.use('/user', require('./router'));

module.exports = router;

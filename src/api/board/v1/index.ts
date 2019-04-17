import express from 'express';

const router = express.Router();
router.use('/board', require('./router'));

module.exports = router;

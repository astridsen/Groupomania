const express = require('express');
const router = express.Router();

const roleCtrl = require('../controllers/role');

const auth = require('../middleware/auth');

router.post('/', roleCtrl.createRole);

module.exports = router;
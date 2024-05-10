// routes/playerRoutes.js
const express = require('express');
const playerController = require('../controllers/playerController');

const router = express.Router();

router.get('/player/puuid', playerController.getPlayerPuuid);
router.get('/player/match-history', playerController.getMatchHistory);

module.exports = router;
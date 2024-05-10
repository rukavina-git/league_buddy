// controllers/playerController.js
const riotApiService = require('../services/riotApiService');

const getPlayerPuuid = async (req, res) => {
    const { nickname, tag } = req.query;
    try {
        const puuid = await riotApiService.getPlayerPuuid(nickname, tag);
        res.json({ puuid });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getMatchHistory = async (req, res) => {
    const { puuid } = req.query;
    try {
        const matchHistory = await riotApiService.getMatchHistory(puuid);
        res.json({ matchHistory });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    getPlayerPuuid,
    getMatchHistory
};
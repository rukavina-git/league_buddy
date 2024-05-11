// controllers/playerController.js
const riotApiService = require('../services/riotApiService');

const getPlayerPuuid = async (req, res) => {
    const {region, nickname, tag } = req.query;
    try {
        const puuid = await riotApiService.getPlayerPuuid(region, nickname, tag);
        res.json({ puuid });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getMatchHistory = async (req, res) => {
    const {region, puuid } = req.query;
    try {
        const matchHistory = await riotApiService.getMatchHistory(region, puuid);
        res.json({ matchHistory });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getMatchDetails = async (req, res) => {
    const {region, puuid } = req.query;
    try {
        const matchDetails = await riotApiService.getMatchDetails(region, puuid);
        res.json({ matchDetails });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    getPlayerPuuid,
    getMatchHistory,
    getMatchDetails
};
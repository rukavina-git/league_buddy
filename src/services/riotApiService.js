// services/riotApiService.js
const axios = require('axios');
const { RIOT_API_KEY } = process.env;

const getPlayerPuuid = async (region, nickname, tag) => {
    try {
        const response = await axios.get(`https://${region}/riot/account/v1/accounts/by-riot-id/${encodeURIComponent(nickname)}/${tag}?api_key=${RIOT_API_KEY}`);
        const puuid = response.data.puuid;
        console.log('Fetched PUUID:', puuid);
        return puuid;
    } catch (error) {
        console.error('Error fetching PUUID:', error.response.data);
        throw error;
    }
};

const getMatchHistory = async (region, puuid) => {
    try {
        const response = await axios.get(`https://${region}/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=1&api_key=${RIOT_API_KEY}`);
        const matchIds = response.data;
        return matchIds;
    } catch (error) {
        console.error('Error fetching match history:', error.response.data);
        throw error;
    }
};

const getMatchDetails = async (region, matchId) => {
    try {
        const response = await axios.get(`https://${region}/lol/match/v5/matches/${matchId}?api_key=${process.env.RIOT_API_KEY}`);
        const matchDetails = response.data;
        console.log("Match Details:", matchDetails);
        return matchDetails;
    } catch (error) {
        console.error('Error fetching match details:', error.response.data);
        throw error;
    }
};

module.exports = {
    getPlayerPuuid,
    getMatchHistory,
    getMatchDetails
};
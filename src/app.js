const express = require('express');
require('dotenv').config({ path: '../.env' });
const { getPlayerPuuid, getMatchHistory, getMatchDetails } = require('./services/riotApiService');
const playerRoutes = require('./routes/playerRoutes');
const { Region } = require('./enums/region');
const app = express();
const PORT = process.env.PORT || 3000;


require('dotenv').config();

app.use(express.json());

app.use('/', playerRoutes);

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    
    try {
        // Call the getPlayerPuuid function from the riotApiService
        const puuid = await getPlayerPuuid(Region.EUROPE,'PewPewPotato', '123');

        console.log('PUUID:', puuid);
        // Call the getMatchHistory function from the riotApiService
        const matchHistory = await getMatchHistory(Region.EUROPE, puuid);
        console.log('Match History:', matchHistory);

        // Call the getMatchDetails function for first match in list from the riotApiService
        const matchDetails = await getMatchDetails(Region.EUROPE, matchHistory[0]);
        console.log('Match Details:', matchDetails);

    } catch (error) {
        console.error('Error fetching Match Details:', error);
    }
});
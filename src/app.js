const express = require('express');
require('dotenv').config({ path: '../.env' });
const { getPlayerPuuid } = require('./services/riotApiService');
const playerRoutes = require('./routes/playerRoutes');

const app = express();
const PORT = process.env.PORT || 3000;


require('dotenv').config();

app.use(express.json());

app.use('/', playerRoutes);

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    
    try {
        // Call the getPlayerPuuid function from the riotApiService
        const puuid = await getPlayerPuuid('PewPewPotato', '123');
        console.log('PUUID:', puuid);
    } catch (error) {
        console.error('Error fetching PUUID:', error);
    }
});
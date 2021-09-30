const axios = require('axios');

export async function getDailyRevenue() {
    try {
        const { data } = await axios.get("https://localhost:44368/api/Stats/getDailyRevenue");
        return data.data;
    } catch (error) {
        console.error(error);
    }
}

export default {getDailyRevenue}

const api = require('./models/api');
const app = require('express').Router();

app.get('/refresh', async (req, res) => {
    try {
        const options = {
            'method': 'GET',
            'Content-Type': 'application/json',
            'muteHttpExceptions': true
        }

        const API_RAW = await fetch(`https://api.wazirx.com/api/v2/tickers`, options);
        const API_DATA = await API_RAW.json();
        var count = 0;
        for (const API in API_DATA) {
            if (count < 10) {
                var DATA = await api.findOne({ name: API_DATA[API].name });
                if (DATA) {
                    DATA.name = API_DATA[API].name;
                    DATA.last = API_DATA[API].last;
                    DATA.buy = API_DATA[API].buy;
                    DATA.sell = API_DATA[API].sell;
                    DATA.volume = API_DATA[API].volume;
                    DATA.base_unit = API_DATA[API].base_unit;
                } else {
                    DATA = new api({
                        name: API_DATA[API].name,
                        last: API_DATA[API].last,
                        buy: API_DATA[API].buy,
                        sell: API_DATA[API].sell,
                        volume: API_DATA[API].volume,
                        base_unit: API_DATA[API].base_unit
                    })
                }
                await DATA.save();
                count++;
            }
        }
        res.send('Updated top 10 result!');
    } catch (err) {
        console.log(err.message);
    }
});

module.exports = app;
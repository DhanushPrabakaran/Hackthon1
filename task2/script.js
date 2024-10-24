const fs = require('fs').promises;

async function fetchJSONData() {
    try {
        const data = await fs.readFile('./data.json', 'utf-8');
        return data;
    } catch (error) {
        console.error('Unable to fetch data:', error);
    }
}

(async () => {
    const Data = await fetchJSONData();
    console.log(Data);
})();

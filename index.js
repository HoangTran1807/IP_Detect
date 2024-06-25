const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const clientIp = req.ip;
    console.log('Client IP:', clientIp);
    res.send(`Your IP address is ${clientIp}`);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
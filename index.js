const express = require('express');
const os = require('os');
const app = express();
const PORT = 3000;

const networkInterfaces = os.networkInterfaces();




app.get('/', (req, res) => {
    for (const name in networkInterfaces) {
        const networkInterface = networkInterfaces[name];
        for (const address of networkInterface) {
          if (address.family === 'IPv4') {
            console.log(`Server IP address: ${address.address}`);
          }
        }
      }
    res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
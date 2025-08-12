const express = require('express');
const apiRouter = require('./routes/index.js');
const config = require('./config/config.js');

const app = express();
const port = config.port;

app.use(express.json());

apiRouter(app);

app.listen(port, () => {
    console.log(`Server listen at: http://localhost:${port}`);
});

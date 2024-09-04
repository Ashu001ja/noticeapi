require('dotenv').config();
const express = require('express');
const router = require('./router/router');
const cnn = require('./db/cnn');
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.use(router);


const Start=async () => {
    try {
        await cnn();
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}

Start();
// Setting up a basic server

import express from 'express';

const app = express();

app.get(
    '/', 

    (req, res) => {
        res.send('Hello from my lovely new!');
    }
);

export default app;
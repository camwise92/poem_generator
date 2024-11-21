// Setting up a basic server

import express from 'express';
import chatCompletion from './services/openai.js';

const app = express();

app.use(express.static('public'));

app.get(
    '/test',
    async (req, res) => {
        const response = await chatCompletion("Provide life altering advice in one sentence.");
        res.send(response);
    }
);

app.get(
    '/get-poem',
    async (req, res) => {
        const response = await chatCompletion(
            "Write me a beautiful poem, maximum of 4 lines"
        );
        res.send({ poem: response });
    }
);

export default app;
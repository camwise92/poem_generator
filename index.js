/* Sets up web server and start listening on port 300. Once its running a message
is printing to console to indicate a successful start*/

import app from './app.js';

const PORT = 3000;

app.listen(
    PORT,
    () => {
        console.log(`Server is running on port ${PORT}`);
    }
);
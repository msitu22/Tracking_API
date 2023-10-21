import https from 'https';
import fs from 'fs';
import express from 'express';
import dotenv from 'dotenv';
import { makeTrack } from './routes/make_Track.js';
import { getTrack } from './routes/get_Track.js';
import { getLoggerInstance } from './logger.js';

const port = 8080
const httpsOptions = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
}

dotenv.config();
const logger = getLoggerInstance();
const app = express();
const server = https.createServer(httpsOptions,app);

app.use(express.json()); // for parsing incoming JSON data from HTTP requests
app.use('/', makeTrack);  // load the makeTrack router module in the app
app.use('/', getTrack);  // load the getTrack router module in the app

server.listen(port, () => {
    logger.info(`Server is listening on ${port}`)
});
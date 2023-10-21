import axios from 'axios';
import { getLoggerInstance } from "../logger.js";

const logger = getLoggerInstance();
export const fetchTrack = async (tracking_data) => {
    const apiKey = process.env.API_KEY;
    const trackingUrl = 'https://api.trackingmore.com/v4/trackings/create';
    try {
        // Make a POST request to the TrackingMore API
        const trackResponse = await axios.post(trackingUrl, tracking_data, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Tracking-Api-Key': apiKey,
            }
        })
        logger.info("TrackingMore API POST request is working")
        return trackResponse.data;
    } catch (error) {
        logger.error(error);
        return error;
    }
}


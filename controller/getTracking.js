import axios from 'axios';
import { data_info } from "../dataset.js";
import { getLoggerInstance } from "../logger.js";

const logger = getLoggerInstance();
export const getTracking = async (order_number) => {

    let tracking_number = "";
    for (let i = 0; i < data_info.length; i++) {
        const dictionary = data_info[i];
        if (dictionary.order_number === order_number) {
            tracking_number = dictionary.tracking_number; // Update the existing variable.
            logger.info("Order number is found in the dataset");
            break; 
        } 
    }

    if (tracking_number === "") {
        logger.error("Order number is not found in the dataset");
        return "Order number is not found in the dataset";
    } else {
        const apiKey = process.env.API_KEY;
        const trackingUrl = `https://api.trackingmore.com/v4/trackings/get?tracking_numbers=${tracking_number}`;

        // Make the GET request with headers
        try {
            const trackResponse = await axios.get(trackingUrl, {
                headers: {
                    'Tracking-Api-Key': apiKey
                }
            })
            logger.info("TrackingMore API GET request is working")
            return ({"delivery_status": trackResponse.data.data[0].delivery_status,
                    "tracking_number": trackResponse.data.data[0].tracking_number, 
                    "courier_code": trackResponse.data.data[0].courier_code, 
                    "order_id": trackResponse.data.data[0].order_id});
        } catch (error) {
            logger.error(error);
            return error;
        }
    }}

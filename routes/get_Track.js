import express from "express";
import { getTracking } from "../controller/getTracking.js";
import { getLoggerInstance } from "../logger.js";

const logger = getLoggerInstance();
export const getTrack = express.Router();

getTrack.get('/get_track', async (req, res) => {
    const order_number = req.body.order_number;

    if (!order_number) {
        logger.error("orderNumber is required for getTrack API");
        return res.status(400).json({ error: 'orderNumber is required' });
    } else {
        const track_detail = await getTracking(order_number);
        if (track_detail === "Order number is not found in the dataset") {
            logger.error("Order number is not valid for getTrack API");
            return res.status(400).json({ error: 'Order number is not valid' });
        } else {
            logger.info("getTrack API is working")
            res.send(track_detail);
        }
    }
});

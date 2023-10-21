import express from "express";
import { fetchTrack } from "../controller/fetchTracking.js";
import { getLoggerInstance } from "../logger.js";
import { data_info } from "../dataset.js";

const logger = getLoggerInstance();
export const makeTrack = express.Router();

makeTrack.post('/make_track', async (req, res) => {
    const order_number = req.body.order_number;
    const tracking_number = req.body.tracking_number;
    const courier_code = req.body.courier_code;
    const order_id = req.body.order_id;

    if (!order_number) {
        logger.error("orderNumber is required for makeTrack API");
        return res.status(400).json({ error: 'orderNumber is required' })
    }
    else {
        const tracking_data = { order_number, tracking_number, courier_code, order_id };
        data_info.push({"order_number": order_number, "tracking_number": tracking_number, "courier_code": courier_code, "order_id": order_id});
        const track_detail = await fetchTrack(tracking_data);
        logger.info("makeTrack API is working")
        res.send(track_detail);
    }
});

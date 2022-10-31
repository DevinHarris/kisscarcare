import express from 'express';
import axios from 'axios';

const Router = express.Router();

Router.get('/vehicle-info', (req, res) => {

    try {
        res.status(200).json({
            message: 'working'
        })
    } catch (err) {
        res.status(400).json({
            message: 'there was an error'
        })
    }
})

Router.post('/vehicle', async (req, res) => {

    const { vin } = req.body;

    try {
        const vehicleData = await axios.get(`http://api.carmd.com/v3.0/decode?vin=${vin}`, {
            headers: {
                "content-type": "application/json",
                "authorization": process.env.carMDKey,
                "partner-token": process.env.carMDToken

            }
        })

        console.log(vehicleData);

        res.status(200).json(vehicleData.data);

    } catch(err) {
        res.status(500).json({
            message: `There was an error ${err}`
        })

        console.log(err)
    }

})

export default Router;
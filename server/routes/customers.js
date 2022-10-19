import express from 'express';
const Router = express.Router();
import { Customer } from '../models/Customer.js';

Router.get('/customers', async (req, res) => {

    try {
        const customers = await Customer.find();
        res.status(200).json(customers);
    } catch(err) {
        console.log(`There was an error ${err}`);
        res.status(500).json({
            message: `There was an error ${err}`
        })
    }
})

Router.get('/customer/:id', (req, res) => {

    const id = req.params.id;

    console.log(`Customer ID: ${id}`)
})

Router.post('/customer/add', async (req, res) => {

    const { body } = req;

    try {
        const customer = await Customer.create(body);
        res.status(201).json(customer);
        console.log('Successfully created new customer!')
        res.sendStatus(201);
    } catch(err) {

        console.log(`There was an error ${err}`);
    }

})

export default Router;
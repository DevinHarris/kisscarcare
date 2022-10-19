import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from "helmet";
import connectDB from './connectDB.js';
import Router from './routes/customers.js';

const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '/config/.env') });

const app = express();

connectDB();

app.use(cors({
    credentials: true,
    origin: '*',
    optionsSuccessStatus: 200
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

app.get('/', (req, res) => {

    res.send({
        message: 'working!'
    })
})

app.use(Router);

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
})

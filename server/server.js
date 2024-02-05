import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
// const port = import.meta.env.VITE_SERVER_PORT;
const port = 8000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
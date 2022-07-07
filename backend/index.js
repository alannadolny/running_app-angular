const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const activitiesRoutes = require('./activities');
require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use('/activities', activitiesRoutes);

const conf = {
  MONGO_HOST: process.env.MONGO_HOST || 'localhost',
  MONGO_PORT: process.env.MONGO_PORT || 27017,
  APP_PORT: process.env.APP_PORT || 5000,
};

mongoose
  .connect(`mongodb://${conf.MONGO_HOST}:${conf.MONGO_PORT}/running_app`)
  .then(() => {
    console.log('Connected to mongoDB');
    app.listen(conf.APP_PORT, () => {
      console.log(`App listening on port ${conf.APP_PORT}`);
    });
  });

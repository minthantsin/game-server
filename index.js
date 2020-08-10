'use strict';

require('dotenv').config(); // Keep at top

const server =require('./lib/server.js');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_ATLAS_URI, {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on('open', ()=> {
  console.log('connected to Mongo')
})

server.start(PORT);
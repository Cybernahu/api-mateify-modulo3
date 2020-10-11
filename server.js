const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://nahuelBenerozzo:contraseñaeningles@cluster0.gyezr.mongodb.net/api-modulo3?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

const express = require('express');
const cors = require('cors');

server.use(cors());

const server = express();
server.use(express.json());
const songRoute = require('./song/route');
const userRoute = require('./users/route');


//Songs
server.get('/songs', songRoute.getSongs);
server.post('/songs/addSong', songRoute.addNewSong);
server.delete('/songs', songRoute.deleteSong);
server.put('/songs/updateSong/:id', songRoute.updateSong);


//Users
 server.get('/users', userRoute.getUsers);
 server.post('/users', userRoute.addNewUser);
 server.delete('/users', userRoute.deleteUser);
 server.put('/users/updateUser/:id', userRoute.updateUser);

server.listen(4000, () =>
  console.log('Example app listening on port 4000!'),
);
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const songSchema = new Schema({
    name:String,
    album:String,
    duration:String,
    artist:String
});

const Song = mongoose.model('song', songSchema);



//get
const getAllSongs = async() => {
    return await Song.find({});
}


//post

const newSong = async(req) => {
    console.log('entró al añadir del model');
    var song = {
        name: req.body.name,
        album: req.body.album,
        duration: req.body.duration,
        artist: req.body.artist
    }
    var data = new Song(song);
    data.save();
}



//delete
async function delSong(id){
   const findAndDeleteSong = Song.findByIdAndRemove({_id: id})
    return await findAndDeleteSong;
}

module.exports ={
    getAllSongs,
    newSong,
    delSong
}
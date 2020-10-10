const songModel = require('./model');

//get
async function findAllSongs(){
    return await songModel.getAllSongs();
}
//post
async function addSongs(req){
    return await songModel.newSong(req);  
}

//delete
async function deleteASong(id){
    return await songModel.delSong(id);  
}

//put
async function updateASongs(song, id){
    console.log('entró al añadir de controller');
    return await songModel.changeSong(song, id);  
}


module.exports = {
    findAllSongs,
    addSongs,
    deleteASong,
    updateASongs
}
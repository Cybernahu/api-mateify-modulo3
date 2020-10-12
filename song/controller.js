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



module.exports = {
    findAllSongs,
    addSongs,
    deleteASong
}
const songsController = require('./controller');





async function getSongs(req, res){
    try {
        var songs = await songsController.findAllSongs();
        res.status(200).send(songs);
    } catch (e) {
        res.status(500).send('Hubo un error' + e);
    }
}

async function addNewSong(req, res){
    try {
        songsController.addSongs(req);
        res.status(201).send('La canción fue agregada correctamente');
        res.redirect('/');
    } catch (e) {
        res.status(500).send('Hubo un error' + e);
    }
}

async function deleteSong(req, res){
    try {
        var id = req.body._id;
        await songsController.deleteASong(id);
        res.status(200).send('La canción fue eliminada correctamente');
        res.redirect('/');
    } catch (e) {
        res.status(500).send('Hubo un error' + e);
    }
}



module.exports = {
    getSongs,
    addNewSong,
    deleteSong
}
const userController = require('./controller');



//get

async function getUsers(req, res){
    try {
        var user = await userController.findAllUsers();
        res.status(200).send(user);
    } catch (e) {
        res.status(500).send('Hubo un error' + e);
    }
}

//post

async function addNewUser(req, res){
    try {
        userController.addUser(req);
        res.status(201).send('El usuario fue registrado con exito');
        res.redirect('/');
    } catch (e) {
        res.status(500).send('Hubo un error en registrar el usuario' + e);
    }
}

//delete
async function deleteUser(req, res){
    try {
        var id = req.body._id;
        await userController.deleteAUser(id);
        res.status(200).send('El usuario fue eliminado correctamente');
        res.redirect('/');
    } catch (e) {
        res.status(500).send('Hubo un error' + e);
    }
}

module.exports = {
    getUsers,
    addNewUser,
    deleteUser 
}

const userModel = require('./model');


//get
async function findAllUsers(){
    return await userModel.getAllUsers();
}

//post
async function addUser(req){
    return await userModel.newUser(req);  
}


//delete
  
async function deleteAUser(id){
    return await userModel.delUser(id);
}

//put

async function updateAUser(user, id){
    console.log('entró al añadir de controller');
    return await userModel.changedUser(user, id);  
}



module.exports = {
    findAllUsers,
    addUser,
    deleteAUser,
    updateAUser
}
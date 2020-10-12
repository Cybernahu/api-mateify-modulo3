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


module.exports = {
    findAllUsers,
    addUser,
    deleteAUser
}
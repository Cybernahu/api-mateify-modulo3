const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:String,
    lastName:String,
    email:String,
    age:Number,
    likedSong:String
});

const User = mongoose.model('user', userSchema);

//get 
const getAllUsers = async() => {
    return await User.find({});
}

//post

const newUser = async(req) => {
    var user = {
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        age: req.body.age,
        likedSong : req.body.likedSong
    }
    var data = new User(user);
    data.save();
}


//delete
async function delUser(id){
    const findAndDeleteUser = User.findByIdAndRemove({_id: id})
     return await findAndDeleteUser;
 }
 

//put

const changeUser = async(user, id) => {
    
    const changeAUser = User.findOne({_id: id});
    
        changeAUser.name = user.name;
        changeAUser.lastName = user.lastName;
        changeAUser.email = user.email;
        changeAUser.age = user.age;
        changeAUser.likedSong = user.likedSong;
        var changedUser = new User(changeAUser);
        await changedUser.save();

}




module.exports ={
    getAllUsers,
    newUser,
    delUser,
    changeUser
}
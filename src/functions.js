const { userModel, contactModel } = require("./user");

async function findAllUsers(req, res) {
    const found = await userModel.find({});
    console.log(found);
    res.status(200).json(found);
}

async function checkDuplicateEmail(req,res, next){
    email = req.body.email;
    let searchedUser = await userModel.findOne({ email: req.body.email }).exec();
    if(searchedUser){
        res.status(404).send({ resultado: false, mensaje: `El email ya existe` });
    }
    else{
        next();
    }
    
}

async function createUser(req,res){
    const newUser = new userModel({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email
    });
    await newUser.save();
    res.status(200).json(`Se creó el usuario ${newUser.email} correctamente`);
}

async function updateUser(req,res){
    const filter = { email: req.query.email };
    const update = { contact: req.body };

    let updatedUser = await userModel.findOneAndUpdate(filter, update, {
        returnOriginal: false
    });
    res.status(200).json(updatedUser);
}



module.exports = { findAllUsers, createUser, checkDuplicateEmail, updateUser };
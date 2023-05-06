const Users = require('../models/UserModel')




const getUsers = async(req, res) => {
        const users = await Users.find()
        res.json(users)
    }



module.exports = {
    getUsers
}
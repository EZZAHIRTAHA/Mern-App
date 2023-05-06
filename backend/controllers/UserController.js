const User = require('../models/UserModel');

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server error' });
  }
};



const setUser = async (req, res) => {
    try {
      const user = await User.create({
        name: req.body.name,
        age: req.body.age,
        username: req.body.username,
      }) 
      res.status(200).json(user)
    } catch (error) {
      console.error(error.message);
    }
  };


module.exports = {
  getUsers,
  setUser
};

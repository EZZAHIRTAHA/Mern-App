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
      const user = req.body
      const newUser = new User(user)
      await newUser.save()
      res.status(200).json(newUser)
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Server error' });
    }
  };


module.exports = {
  getUsers,
  setUser
};

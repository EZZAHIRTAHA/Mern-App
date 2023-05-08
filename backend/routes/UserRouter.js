const express = require('express');
const router = express.Router();
const { getUsers, createUser,deleteUser,getUserById,setUser,updateUser } = require('../controllers/UserController');

router.route('/')
  .get(getUsers)
  .post(createUser)
  .put(updateUser)
  .delete(deleteUser);

router.get('/:id', getUserById);



module.exports = router;

const express = require('express');
const router = express.Router();
const { getUsers, createUser, deleteUser, getUserById, updateUser } = require('../controllers/UserController');

router.route('/')
  .get(getUsers)
  .post(createUser)

router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/delete/:id', deleteUser);

module.exports = router;

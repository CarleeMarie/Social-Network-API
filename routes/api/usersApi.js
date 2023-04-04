const router = require('express').Router();
const {
  getAllUsers,  //done
  getSingleUser,  //done
  createUser,  //done
  updateUser,  //done?
  deleteUser, //done?
} = require('../../controllers/userController');

// get users
router.route('/').get(getAllUsers).post(createUser);

// get single user by _id
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
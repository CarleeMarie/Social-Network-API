const { Reaction , Thought , User } = require('../models');

module.exports = {
  // Get all users
  getAllUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  // Get a single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then((user) => 
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
        )
          .catch((err) => res.status(500).json(err));
  },
  // Create user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
// Update user
  updateUser(req, res) {
    User.findOneAndUpdate( 
      { _id: req.params.userId },
      { $set: req.body } ,
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that id." })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
// Delete user
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID." })
          : User.deleteMany({ _id: { $in: user.thoughts } })
      )
      .then(() => res.json({ message: "User and associated thoughts deleted." }))
      .catch((err) => res.status(500).json(err));
  },
}
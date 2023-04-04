const { Reaction , Thought , User } = require('../models');

module.exports = {
  // Get all thoughts
  getAllThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  // Get a single thought
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thoughts) => 
        !thoughts
          ? res.status(404).json({ message: 'This user has no thoughts.' })
          : res.json(thoughts)
        )
          .catch((err) => res.status(500).json(err));
  },
  // Create thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  // Update thought
  updateThought(req, res) {
    Thought.findOneAndUpdate( 
      { _id: req.params.thoughtId },
      { $set: req.body } ,
      { runValidators: true, new: true }
    )
      .then((thoughts) =>
        !thoughts
          ? res.status(404).json({ message: "No thought with that id." })
          : res.json(thoughts)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
// TODO Delete thought Q: where does the thoughtId come from??
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thoughts) =>
        !thoughts
          ? res.status(404).json({ message: "This user has no thoughts to delete." })
          : res.json(thoughts)
      ) 
      .catch((err) => {
        console.log(err);
       res.status(500).json(err);
  });
  }
}
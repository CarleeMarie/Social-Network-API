// sets up the instance of the schema to define properties of each user
const user = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    thoughts: { [
        { _id: this.Thought}
    ]}
    friends: { {
        { user._id: }
    }}
    lastAccessed: { type: Date, default: Date.now },
  });
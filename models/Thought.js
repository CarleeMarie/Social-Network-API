const thought = new mongoose.Schema({
    thoughtText: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    username: { type: String, required: true },
    reactions: { [
        reactionSchema
    ]}
    friends: { {
        { user._id: }
    }}
    lastAccessed: { type: Date, default: Date.now },
  });
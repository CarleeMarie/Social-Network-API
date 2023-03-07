// sets up the instance of the schema to define properties of each user
const reaction = new mongoose.Schema({
    reactionId: { type: String, required: true },
    reactionBody: { type: String, required: true },
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  });
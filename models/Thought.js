const {Schema, model} = require('mongoose');

const userSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => new Date(timestamp).toLocaleDateString()
            
        },
        
        username:
            {
                type: String,
                required: true
            },
    

        reactions: [reactionSchema]
    },
    {
        toJSON: {
            getters: true
        },
            id: false
    }

)

userSchema.virtual("reactionCount").get(function(){
    return this.reactions.length;
})

const User = model("User", userSchema);
module.exports = User;
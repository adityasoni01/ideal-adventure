import { Schema,model,models } from "mongoose";

import User from "./userModel";
const postSchema = new Schema({
    Uid: {
        type: Schema.ObjectId,
        ref: 'User',
    },
      caption: {
        type: String,
    },
      image: {
        type: String,
    },
    time : { type: String, default: (new Date()).toDateString() }
      
})
postSchema.pre(/^find/, function(next) {
    this.populate({
      path: 'Uid',
      select: 'name'
    });
    next();
  });
const Post = models.Post || model('Post', postSchema);

export default Post;
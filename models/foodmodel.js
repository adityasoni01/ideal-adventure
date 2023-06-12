import { Schema,model,models } from "mongoose";

import User from "./userModel";
const foodSchema = new Schema({
    Uid: {
        type: Schema.ObjectId,
        ref: 'User',
    },
      name: {
        type: String,

    },
      image: {
        type: String,
    },
    timing: {
        type: String,
    },
    location: {
        type: String,
    },

      
})
foodSchema.pre(/^find/, function(next) {
    this.populate({
      path: 'Uid',
      select: 'name phone address'
    });
    next();
  });
const Food = models.Food || model('Food', foodSchema);

export default Food;
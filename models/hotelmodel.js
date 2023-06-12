import { Schema,model,models } from "mongoose";

import User from "./userModel";
const hotelSchema = new Schema({
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
    price: {
        type: Number,
    },
    location: {
        type: String,
    },
    capacity: {
        type: Number,
    },

      
})
hotelSchema.pre(/^find/, function(next) {
    this.populate({
      path: 'Uid',
      select: 'name phone address'
    });
    next();
  });
const Hotel = models.Hotel || model('Hotel', hotelSchema);

export default Hotel;
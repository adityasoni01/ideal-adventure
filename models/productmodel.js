import { Schema,model,models } from "mongoose";

import User from "./userModel";
const productSchema = new Schema({
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
      
})
productSchema.pre(/^find/, function(next) {
    this.populate({
      path: 'Uid',
      select: 'name phone address'
    });
    next();
  });
const Product = models.Product || model('Product', productSchema);

export default Product;
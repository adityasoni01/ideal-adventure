import { Schema,model,models } from "mongoose";
const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name is required for a user']
      },
      email: {
        type: String,
        required: [true, 'email is required for a user'],
        unique: true,
        lowercase: true
      },
      phone: {
        type: String,
        unique: true,
        required: [true, 'phone is required for a user']
      },
      address: {
        type: String,
        required: [true, 'address is required for a user']
      },
      password: {
        type: String,
        required: [true, 'please provide a password']
      },
})
const User = models.User || model('User', userSchema);
export default User;
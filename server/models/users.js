import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profileImage: { type: String },
    isAdmin: { type: Boolean, required: true },
  },
  { timestamps: true }
);

export default mongoose.model('users', userSchema);

const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  mobile_number: { type: Number, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  gender: {
    type: String,
    enum: ["Male", "Female", "I dont want to specify"],
    required: true,
  },
  cart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "cart",
  },
});

const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };


//sample data
// "first_name": "Ankita",
// "last_name": "Barad",
// "mobile_number": 9611337085,
// "email": "ankita@gmail.com",
// "password":"ank@123",
// "gender": "Female"
 

const { Schema, default: mongoose } = require("mongoose");

const UsersSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  photoURL: String,
  password: {
    type: String,
    minlenght: [4, "User password length can be minimum 4 characters"],
    set: (v) => bcrypt.hashSync(v, bcrypt.genSaltSync(10)),
  },
  creationTime: {
    type: Date,
    default: Date.now()
  }
});


const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;
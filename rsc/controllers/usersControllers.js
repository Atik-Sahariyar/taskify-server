const Users = require("../models/UsersModel");

// create a new user controller
exports.postUserController = async (req, res) => {
  try {
    console.log("calling");
    const user = req.body;
    console.log("user", user);
    const query = { email: user.email };
    const existingUser = await Users.findOne(query);
    if (existingUser) {
      return res.send({ message: "user already exists", insertedId: null });
    }
    const newUser = new Users(user);
    const result = await newUser.save();
    res.send(result);

  } catch (error) {
    console.error("Error post user data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

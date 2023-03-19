const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("user already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      _name: user.name,
      _email: user.email,
      _password: user.password,
    });
  } else {
    res.status(400);
    throw new Error("Error");
  }
};

module.exports = registerUser;

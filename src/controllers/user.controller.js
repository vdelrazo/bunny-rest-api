import User from "../models/User";

export const findAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({
      message:
        error.message || "Something went wrong while retrieving the users",
    });
  }
};

export const createUser = async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
    });
    const userSaved = await newUser.save();
    res.json(userSaved);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something went wrong while creating the user",
    });
  }
};

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

export const deleteUser = async (req, res) => {
  try {
    const deletedData = await User.findByIdAndDelete(req.params.id);
    res.json({ message: `${deletedData.name} was succesfully deleted` });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something went wrong while deleting the user",
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: `${updatedUser.name} was succesfully updated` });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something went wrong while updating the user",
    });
  }
};


import User from "../models/userModel.js";


export const createUser = async (req, res) => {
  console.log(req.url);
  console.log("Something else");

  const image = req.file.path;

  const user = new User({...req.body, image} );

  try {
    await user.save();
    res.status(201).json({ User: user });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json({ Users: users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ err: "something went wrong" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json(deletedUser + "Deleted");
  } catch (error) {
    console.log(error);
    res.status(500).json({ Err: error.message });
  }
};

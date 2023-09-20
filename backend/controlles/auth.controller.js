//  implement global error hangling

import UserModel from "../model/User.modal.js";
import bcryptjs from "bcryptjs";
export const Sign_Up = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashpass = bcryptjs.hashSync(password, 10);

  const newUser = new UserModel({ username, email, password: hashpass });
  try {
    await newUser.save();
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }

  res.status(201).json({
    message: "User Created successfully",
  });
};

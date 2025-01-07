const { User } = require("../models/user.schema");
const bcrypt = require("bcrypt");

const RegisterUser = async (req, res) => {
  try {
    const {
      userName,
      password,
      firstName,
      lastName,
      brithday,
      gender,
      address,
      phone,
    } = req.body;
    const existingUser = await User.findOne({ userName });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Bu nom bilan ro'yxatdan o'tgan foydalanuvchi mavjud",
      });
    } else {
      const hashPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        userName,
        password: hashPassword,
        firstName,
        lastName,
        brithday,
        gender,
        address,
        phone,
      });
      await newUser.save();
      return res.status(201).json({
        success: true,
        message: "Ro'yxatdan o'tish muvaffaqiyatli yakulandi",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).json({
      success: true,
      message: "foydalanuvchilar ro'yxati",
      innerData: users,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user topilmadi",
      });
    }
    return res.status(200).json({
      success: true,
      message: "user topildi",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const {
      userName,
      password,
      firstName,
      lastName,
      brithday,
      gender,
      address,
      phone,
    } = req.body;
    const user = await User.findByIdAndUpdate(
      userId,
      {
        userName,
        password,
        firstName,
        lastName,
        brithday,
        gender,
        address,
        phone,
      },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user topilmadi",
      });
    }
    return res.status(200).json({
      success: false,
      message: "user o'zgartirildi",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const DeleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user topilmadi",
      });
    }
    return res.status(200).json({
      success: true,
      message: "user o'chirildi",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  RegisterUser,
  getUsers,
  getUserById,
  updateUser,
  DeleteUser,
};

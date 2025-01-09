const { Edu } = require("../models/eduSchema");

const RegisterEdu = async (req, res) => {
  try {
    const { city, street, center_name, branch, rating } = req.body;
    const newEdu = new Edu({
      city,
      street,
      center_name,
      branch,
      rating,
    });
    await newEdu.save();
    return res.status(201).json({
      succes: true,
      message: "Edu qo'shildi",
    });
  } catch (error) {
    return res.status(500).json({
      succes: false,
      message: error.message,
    });
  }
};

const getUsersEdu = async (req, res) => {
  try {
    const users = await Edu.find({});
    return res.status(200).json({
      success: true,
      message: "Edu ro'yxati",
      innerData: users,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getUserByIdEdu = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await Edu.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Edu topilmadi",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Edu",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateUserEdu = async (req, res) => {
  try {
    const eserId = req.params.id;
    const { city, street, center_name, branch, rating } = req.body;
    const user = await Edu.findByIdAndUpdate(
      eserId,
      {
        city,
        street,
        center_name,
        branch,
        rating,
      },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Edu topilmadi",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Edu o'zgartirildi",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const DeleteEdu = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await Edu.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Edu topilmadi",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Edu o'chirildi",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  RegisterEdu,
  getUsersEdu,
  getUserByIdEdu,
  updateUserEdu,
  DeleteEdu,
};

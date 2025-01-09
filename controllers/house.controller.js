const { House } = require("../models/houseScheme");

const RegisterHouse = async (req, res) => {
  try {
    const { region, city, house_number, street, family_members, location } =
      req.body;
    const newEdu = new House({
      region,
      city,
      house_number,
      street,
      family_members,
      location,
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

const getUsersHouse = async (req, res) => {
  try {
    const users = await House.find({});
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

const getUserByIdHouse = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await House.findById(userId);
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

const updateUserHouse = async (req, res) => {
  try {
    const eserId = req.params.id;
    const { region, city, house_number, street, family_members, location } =
      req.body;
    const user = await House.findByIdAndUpdate(
      eserId,
      {
        region,
        city,
        house_number,
        street,
        family_members,
        location,
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

const DeleteHouse = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await House.findByIdAndDelete(userId);
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
  RegisterHouse,
  getUsersHouse,
  getUserByIdHouse,
  updateUserHouse,
  DeleteHouse,
};

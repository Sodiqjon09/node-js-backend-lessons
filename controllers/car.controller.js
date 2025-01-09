const { Car } = require("../models/carSheme");

const RegisterCar = async (req, res) => {
  try {
    const {
      title,
      model,
      description,
      color,
      horsePower,
      carType,
      charging,
      weight,
      gasoline,
      yearMachine,
      price,
    } = req.body;
    const newCar = new Car({
      title,
      model,
      description,
      color,
      horsePower,
      carType,
      charging,
      weight,
      gasoline,
      yearMachine,
      price,
    });
    await newCar.save();
    return res.status(201).json({
      success: true,
      message: "Avtomobil ro'yxatdan o'tish muvaffaqiyatli yakulandi",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getCars = async (req, res) => {
  try {
    const cars = await Car.find({});
    return res.status(200).json({
      success: true,
      message: "Foydalanuvchilar ro'yxati",
      innerData: cars,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const carUserById = async (req, res) => {
  try {
    const carId = req.params.id;
    const car = await Car.findById(carId);
    if (!car) {
      return res.status(404).json({
        success: false,
        message: "Avtomobil topilmadi",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Avtomibil topildi",
      car,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateCar = async (req, res) => {
  try {
    const CarId = req.params.id;
    const {
      title,
      model,
      description,
      color,
      horsePower,
      carType,
      charging,
      weight,
      gasoline,
      yearMachine,
      price,
    } = req.body;
    const car = await Car.findByIdAndUpdate(
      CarId,
      {
        title,
        model,
        description,
        color,
        horsePower,
        carType,
        charging,
        weight,
        gasoline,
        yearMachine,
        price,
      },
      { new: true }
    );
    if (!car) {
      return res.status(404).json({
        success: false,
        message: "Avtomobil topilmadi",
      });
    }
    return res.status(200).json({
      success: true,
      message: car,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const carId = req.params.id;
    const car = await Car.findByIdAndDelete(carId);
    if (!car) {
      return res.status(404).json({
        success: false,
        message: "Avtomobil topilmadi",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Avtomobil o'chirildi",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { RegisterCar, getCars, carUserById, updateCar, deleteUser };

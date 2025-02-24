const AuthSchema = require("../models/auth.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const register = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    const user = await AuthSchema.findOne({ email });
    if (user) {
      return res.status(500).json({ message: "Böyle bir kullanıcı zaten var" });
    }

    if (password.length < 6) {
      return res
        .status(500)
        .json({ message: "Şifreniz 6 karakterden az olmamalı" });
    }

    const passwordHash = await bcrypt.hash(password, 12);

    if (!isEmail(email)) {
      return res
        .status(500)
        .json({ message: "Girdiğiniz değer email olmalıdır" });
    }

    const newUser = await AuthSchema.create({
      username,
      email,
      password: passwordHash,
    });

    const token = jwt.sign({ id: newUser._id }, "SECRET_KEY", {
      expiresIn: "1h",
    });

    res.status(201).json({
      status: "OK",
      newUser,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await AuthSchema.findOne({ email });

    if (!user) {
      return res.status(500).json({ message: "Böyle bir kullanıcı bulunmadı" });
    }

    const passwordConfirm = await bcrypt.compare(password, user.password);

    if (!passwordConfirm) {
      return res.status(500).json({ message: "Girilen şifre yanlış" });
    }

    const token = jwt.sign({ id: user._id }, "SECRET_KEY", {
      expiresIn: "1h",
    });

    res.status(201).json({
      status: "OK",
      user,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

function isEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email.trim());
}

module.exports = {
  register,
  login,
};

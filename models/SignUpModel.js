const mongoose = require("mongoose");
const validator = require("validator");

const signupTemplate = new mongoose.Schema({
  fullName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email!");
      }
    },
  },
  mobile: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isMobilePhone(value)) {
        throw new Error("Should be a mobile number of length 10");
      }
    },
  },
  password: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isAlphanumeric(value)) {
        throw new Error("must contain alphabets and numeric values!");
      }
      if (value.length < 8) {
        throw new Error("Password should be equal to or less than 8");
      }
    },
  },
  confirmPassword: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("mytable", signupTemplate);

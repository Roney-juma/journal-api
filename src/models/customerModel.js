const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },

    email: {
      type: String,
      unique: true,
      required: true,
    },
    username: {
      type: String,
      unique: true,
    },
    phone: {
      type: String,
    },
    policyNumber: { 
      type: String, 
      required: true, 
      unique: true },
    password: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);
const customer = mongoose.model("customer", customerSchema);
module.exports = customer;

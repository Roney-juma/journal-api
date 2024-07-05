const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const claimSchema = new Schema({
  customerId: { type: Schema.Types.ObjectId, ref: 'Customer', required: true },
  incidentDetails: {
    date: { type: Date, required: true },
    time: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    weatherConditions: { type: String },
    roadConditions: { type: String },
  },
  vehiclesInvolved: [{
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    VIN: { type: String, required: true },
    licensePlate: { type: String, required: true },
  }],
  drivers: [{
    name: { type: String, required: true },
    contactInfo: {
      phone: { type: String, required: true },
      email: { type: String, required: true },
    },
    driverLicenseNumber: { type: String, required: true },
  }],
  passengers: [{
    name: { type: String },
    contactInfo: {
      phone: { type: String },
      email: { type: String },
    },
  }],
  damage: {
    yourVehicle: { type: String, required: true },
    otherVehicles: { type: String },
    property: { type: String },
  },
  injuries: [{
    person: { type: String, required: true },
    description: { type: String, required: true },
  }],
  witnesses: [{
    name: { type: String, required: true },
    contactInfo: {
      phone: { type: String, required: true },
      email: { type: String, required: true },
    },
  }],
  policeReport: {
    reportNumber: { type: String },
    officerName: { type: String },
    department: { type: String },
  },
  supportingDocuments: {
    photos: [String],
    videos: [String],
    repairEstimates: [String],
    medicalReports: [String],
  },
  additionalInfo: {
    towingDetails: {
      company: { type: String },
      location: { type: String },
    },
    receipts: [String],
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  }
}, { timestamps: true });

module.exports = mongoose.model('Claim', claimSchema);

const express = require('express');
const router = express.Router();
const Claim = require('../models/claim.model');


const createClaim = async (req, res) => {
    try {
      const claim = new Claim(req.body);
      await claim.save();
      res.status(201).send(claim);
    } catch (error) {
      res.status(400).send(error);
    }
  };

// Get all claims
const getClaims = async (req, res) => {
  try {
    const claims = await Claim.find();
    res.status(200).json(claims);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Approve a claim
 const approveClaim = async (req, res) => {
  try {
    const claim = await Claim.findByIdAndUpdate(
      req.params.id,
      { status: 'Approved' },
      { new: true }
    );
    if (!claim) {
      return res.status(404).send('Claim not found');
    }
    res.status(200).send(claim);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Delete a claim
const deleteClaim = async (req, res) => {
  try {
    const claim = await Claim.findByIdAndDelete(req.params.id);
    if (!claim) {
      return res.status(404).send('Claim not found');
    }
    res.status(200).send('Claim deleted');
  } catch (error) {
    res.status(500).send(error);
  }
};

// Reject a claim
const rejectClaim = async (req, res) => {
  try {
    const claim = await Claim.findByIdAndUpdate(
      req.params.id,
      { status: 'rejected' },
      { new: true }
    );
    if (!claim) {
      return res.status(404).send('Claim not found');
    }
    res.status(200).send(claim);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get a specific claim
const getClaimById = async (req, res) => {
  try {
    const claim = await Claim.findById(req.params.id);
    if (!claim) {
      return res.status(404).send('Claim not found');
    }
    res.status(200).json(claim);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
    createClaim,
    getClaims,
    approveClaim,
    deleteClaim,
    rejectClaim,
    getClaimById

  };

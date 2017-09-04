const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const auth = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: 'user'
});

const ctrlAuthentication  = require('./controllers/authentication');
const ctrlProfile         = require('./controllers/profile');

// ========== Authentication Endpoints =============

router.post('/register', ctrlAuthentication.register);
router.post('/login', ctrlAuthentication.login);
// router.post('/request-password-reset', ctrlAuth.requestPasswordReset);
// router.post('/reset-password', ctrlAuth.resetPassword);

// =================================================
// ============== Profile Endpoints ================
router.get('/profile', auth, ctrlProfile.getProfile);
router.patch('/profile', auth, ctrlProfile.updateProfile);
// GET      /profile        Gets user data
// PATCH    /profile        Updates user data
// DELETE   /profile        Deletes user account

module.exports = router;
const mongoose = require('mongoose');
const {isEmail} = require('validator');
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required!'],
    minlength: [2, 'First name must be at least 2 characters long!']
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required!'],
    minlength: [2, 'Last name must be at least 2 characters long!']
  },
  homeTown: {
    type: String,
    required: [true, 'Home town is required!'],
    minlength: [2, 'Home town must be at least 2 characters long!']
  },
  state: {
    type: String,
    required: [true, 'State is required!'],
    maxlength: [2, 'State cannot be over 2 characters!']
  },
  favoriteCuisine: {
    type: String,
    required: [true, 'Favorite cuisine is required!'],
    minlength: [4, 'Favorite cuisine must be at least 4 characters long!']
  },
  favoriteChef: {
    type: String,
    required: [true, 'Favorite chef is required!'],
    minlength: [2, 'Favorite chef must be at least 2 characters long!']
  },
  email: {
    type: String,
    required: [true, 'Email is required!'],
    unique: [true, 'Email already exists!'],
    validate: [isEmail, "Please enter a valid email!"]
  },
  password: {
    type: String,
    required: [true, 'Password is required!'],
    minlength: [8, 'Favorite chef must be at least 8 characters long!']
  }
}, {timestamps: true});

// Middleware to create virtual field "confirm Password"
UserSchema.virtual('confirmPassword')
  .get(() => this._confirmPassword)
  .set((value) => this._confirmPassword = value);

// Middleware to validate the password and confirm password match
UserSchema.pre('validate', function (next){
  if (this.password !== this.confirmPassword) {
    this.invalidate('confirmPassword', 'Password must match confirm password');
  }
  next();
});

// Middleware to hash the password
UserSchema.pre('save', function (next){
  bcrypt.hash(this.password, 10)
    .then(hash => {
      this.password = hash;
      next();
    });
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
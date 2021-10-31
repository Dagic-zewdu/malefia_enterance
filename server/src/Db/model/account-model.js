const mongoose = require('mongoose')
const Joi = require('joi')
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', userSchema);
function validateUser(user) {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(5).max(1024).required(),
    });
    const validation = schema.validate(user);
    return validation;
}
module.exports = { User, validateUser }
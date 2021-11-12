const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    surname: {
        type: String,
        require: true,
        trim: true
    },
    age: {
        type: Number,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        trim: true
    },
}, { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } })

module.exports = model('user', userSchema);

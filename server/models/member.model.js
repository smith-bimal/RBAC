const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    userId: {
        type: String,
        unique: true,
        required: true
    },
    name: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    role: String,
    status: String,
    permissions: {
        create: Boolean,
        manage: Boolean,
        edit: Boolean,
        view: Boolean,
        remove: Boolean
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});

const Member = mongoose.model('Member', memberSchema);
module.exports = Member;
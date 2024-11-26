const Member = require("../models/member.model");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const { generateRandomID } = require("../utils/helper");

const getAllMembers = async (req, res) => {
    try {
        const members = await Member.find({});
        return res.status(200).json(members);
    } catch (err) {
        return res.status(500).json(err);
    }
}

const addMember = async (req, res) => {
    try {
        const { name, email, role, status, permissions } = req.body;

        let userId = generateRandomID();
        let member = await Member.findOne({ userId });

        while (member) {
            userId = generateRandomID();
            member = await Member.findOne({ userId });
        }

        const existingMember = await Member.findOne({ email });
        if (existingMember) {
            return res.status(403).json({ message: "Member already exists" });
        }

        const newMember = new Member({ userId, name, email, role, status, permissions });
        await newMember.save();
        return res.status(200).json({ message: "Member added successfully" });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

const editMember = async (req, res) => {
    try {
        const { name, email, role, status, permissions } = req.body;
        await Member.findOneAndUpdate({ email: req.body.email }, { name, email, role, status, permissions });
        return res.status(200).json({ message: "Successfully Updated" });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

const deleteMember = async (req, res) => {
    try {
        await Member.findOneAndDelete({ email: req.params.email });
        return res.status(200).json({ message: "Member deleted successfully" });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

module.exports = { getAllMembers, addMember, editMember, deleteMember };

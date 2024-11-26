require('dotenv').config({ path: "../.env" });

const express = require("express");
const app = express();
const mongoose = require('mongoose');
const { members } = require('./demo_members');
const Member = require('../models/member.model');
const User = require('../models/user.model');

console.log(process.env.DB_URL);
main()
    .then(() => console.log('Database connection established'))
    .catch(err => console.log('Error connecting to the database: ', err));

async function main() {
    await mongoose.connect(process.env.DB_URL);
}

const insertData = async () => {
    try {
        await User.deleteMany({});
        await Member.deleteMany({});
        const demoUser = new User({ name: "Admin", email: "admin@mail.com", password: "$2b$10$z0iE.jd6UFiDNAVDDZnxqeJ0Qc1gBwdoJDrKIOLEpD1ckM8A.N.9K" });
        const formattedMembers = members.map(member => ({
            ...member,
            createdOn: new Date(member.createdOn.split('-').reverse().join('-')) // Convert DD-MM-YYYY to YYYY-MM-DD
        }));
        
        await demoUser.save();
        await Member.insertMany(formattedMembers);
        console.log('Data inserted successfully');
    } catch (err) {
        console.error('Error inserting data: ', err);
    }
};

insertData();

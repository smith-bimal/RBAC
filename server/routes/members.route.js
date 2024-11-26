const express = require("express");
const router = express.Router();
const { addMember, getAllMembers, editMember, deleteMember } = require("../controllers/members.controller");
const { verify } = require("../utils/middleware");

router.route('/')
    .get(verify, getAllMembers)
    .post(verify, addMember);

router.route('/:email')
    .put(verify, editMember)
    .delete(verify, deleteMember);

module.exports = router;
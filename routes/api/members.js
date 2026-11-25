const express = require('express');
const router = express.Router();
const { getMembers, getMember, createMember } = require('../../controllers/membersController');

router.get('/', getMembers);
router.get('/:id', getMember);
router.post('/', createMember);

module.exports = router;

const members = require('../data/members');

// get all members
const getMembers = (req, res) => res.json(members);

// get single member
const getMember = (req, res) => {

    const found = members.some(member => member.id === parseInt(req.params.id));

    if(found){
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    }
    else{
        res.status(400).json({msg : `Member ID : ${req.params.id} not found`});
    }

};

//create member
const createMember = (req, res) => {
    res
};

module.exports = { getMembers, getMember, createMember };

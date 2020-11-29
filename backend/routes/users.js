const router = require('express').Router();
const { User } = require('../models/user-model');

router.get('/',async(req,res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
    
});

router.post('/add',async(req,res) => {

    try{
        let newUser = new User({username : req.body.username});

        newUser = await newUser.save();
        res.json("User added");
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

module.exports = router;
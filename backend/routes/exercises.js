const router = require('express').Router();
const { Exercise } = require('../models/exercise-model');
const { User } = require('../models/user-model');

router.get('/',async(req,res) => {
    try {
        const exercises = await Exercise.find();
        res.json(exercises);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
    
});

router.post('/add',async(req,res) => {

    try{
        const username = req.body.username;
        const description = req.body.description;
        const duration = Number(req.body.duration);
        const date = Date.parse(req.body.date);

        const user = await User.find({username});
        if(user.length == 0) throw new Error('Invalid User');

        let newExercise = new Exercise({
            user : user[0],
            description,
            duration,
            date
        });

        newExercise = await newExercise.save();
        res.json("Exercise added");
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

router.put('/:id',async (req,res) => {
    
    try{
        const username = req.body.username;
        const description = req.body.description;
        const duration = Number(req.body.duration);
        const date = Date.parse(req.body.date);

        const user = await User.find({username});
        if(user.length == 0) throw new Error('Invalid User');

        const exercise = await Exercise.findByIdAndUpdate(req.params.id,{
            user : {
                _id : user[0]._id,
                username : user[0].username
            },
            description,
            duration,
            date
        });

        if(!exercise) return res.status(404).json('movie not found with this id');
        res.json('Exercise updated');

    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
})

router.delete('/:id',async (req,res) => {

    const exercise = await Exercise.findByIdAndRemove(req.params.id);
    
    if(!exercise) return res.status(404).json('exercise not found with this id to be deleted');

    res.json('Exercise deleted');
});

router.get('/:id',async (req,res) => {
    
    const exercise = await Exercise.findById(req.params.id);

    if(!exercise) return res.status(404).json('exercise not found with this id');
    
    res.json(exercise);
});


module.exports = router;
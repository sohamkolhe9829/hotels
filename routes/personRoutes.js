const express = require('express')


const Person = require('./../models/Person');
const router = express.Router();



//Get API's
router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", error });

    }
})

//Paramiterized get method
router.get('/:workType', async (req, res) => {

    try {

        const workType = req.params.workType;
        if (workType == 'chef' || workType == 'manager' || workType == 'waiter') {
            const response = await Person.find({ work: workType });
            res.status(200).json(response)
        } else {
            res.status(404).json({ error: "Inavalid work type." })
        }


    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", error });

    }
})

//Post API's
router.post('/', async (req, res) => {

    try {

        const data = req.body;

        const newPerson = new Person(data);

        const savedPerson = await newPerson.save();
        res.status(200).json(savedPerson);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", error });
    }

})


//Put API's
router.put('/:id', async (req, res) => {

    try {
        const personId = req.params.id;

        const updatedPersonData = req.body;

        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true, //return updated data
            runValidators: true, //run mongoose validation
        })

        if (!response) {
            return res.status(404).json({ error: 'Person not found' });
        }

        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }

})


// Delete API's
router.delete('/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", error });

    }
})

module.exports = router;
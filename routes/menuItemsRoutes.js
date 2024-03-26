const express = require('express')


const MenuItem = require('./../models/MenuItem');
const router = express.Router();



//Get API's 
router.get('/', async (req, res) => {
    try {
        const data = await MenuItem.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", error });

    }
})

router.get('/:tasteType', async (req, res) => {
    try {

        const tasteType = req.params.tasteType;
        const data = await MenuItem.find({ taste: tasteType });
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", error });

    }
})


// Post API's
router.post('/', async (req, res) => {

    try {
        const data = req.body;
        const newMenuItem = new MenuItem(data);
        const savedMenuItem = await newMenuItem.save();
        res.status(200).json(savedMenuItem);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", error });
    }

})


//Put API's
router.put('/:id', async (req, res) => {

    try {
        const menuItemId = req.params.id;

        const updatedMenuItemData = req.body;

        const response = await MenuItem.findByIdAndUpdate(menuItemId, updatedMenuItemData, {
            new: true, //return updated data
            runValidators: true, //run mongoose validation
        })

        if (!response) {
            return res.status(404).json({ error: 'MenuItem Item not found' });
        }

        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }

})


// Delete API's
router.delete('/:id', async (req, res) => {
    zA
    try {
        const menuItemId = req.params.id;
        const response = await MenuItem.findByIdAndDelete(menuItemId);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", error });

    }
})


module.exports = router;



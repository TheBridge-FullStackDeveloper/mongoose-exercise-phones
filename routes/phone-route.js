const router = require("express").Router();
const PhoneModel = require('../models/Phone');


router.get("/all", async (req, res) => {
    const sort = req.query.sort;

    let phones = await PhoneModel.find({});

    if (String(sort) === 'desc') {
        phones.sort(
            function({price: a}, {price:b}) {
            return b-a
        });
    };

    if (String(sort) === 'asc') {
        phones.sort(
            function({price: a}, {price:b}) {
            return a-b
        });
    }

    res.status(200).json(phones);
});

router.post('/create', async (req, res) => {
    const newPhone = req.body;
    const updatedDB = await PhoneModel.create(newPhone, {});

    res.status(200).json(updatedDB);
});

router.put('/update/:id', async (req, res) => {
    const { id } = req.params;
    const updatedProperties = req.body;

    const updatedDoc = await PhoneModel.findByIdAndUpdate( id, updatedProperties, {
        new:true,
    });

    res.status(200).json(updatedDoc);
});

router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;
    const updatedDB = await PhoneModel.findOneAndDelete( { _id: id } );
    res.status(200).json(updatedDB);
});

module.exports = router;
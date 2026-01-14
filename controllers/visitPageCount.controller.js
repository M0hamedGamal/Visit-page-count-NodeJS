const VisitPageCountModel = require("../models/visitPageCount.model");

const visitPageCountController = async (req, res) => {
    const {page} = req.body

    const updatedPageCount = await VisitPageCountModel.findOneAndUpdate(
        {page},
        {$inc: {visit: 1}},
        {
            new: true,
            upsert: true
        })

    res.json(updatedPageCount);
}

module.exports = visitPageCountController;
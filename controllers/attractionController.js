const Attraction = require('../models/Attraction');

exports.createAttraction = async (req, res) => {
    try {
        const { name, location, entryFee } = req.body; // Form-urlencoded data
        const attraction = new Attraction({ name, location, entryFee });
        await attraction.save();
        res.status(201).send(attraction);
      } catch (err) {
        res.status(400).send({ error: err.message });
      }
};

exports.getTopRatedAttractions = async (req, res) => {
  try {
    const attractions = await Attraction.find().sort({ rating: -1 }).limit(5);
    res.send(attractions);
  } catch (err) {
    res.status(500).send(err);
  }
};

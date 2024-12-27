const Visitor = require("../models/Visitor");
const Attraction = require("../models/Attraction");
exports.createVisitor = async (req, res) => {
    try {
        const { name, email, visitedAttractions } = req.body;
        const visitor = new Visitor({ name, email, visitedAttractions });
        await visitor.save();
        res.status(201).send(visitor);
      } catch (err) {
        if (err.code === 11000) {
          // Handle duplicate email error
          return res.status(400).send({ error: "Email already exists." });
        }
        res.status(400).send({ error: err.message }); // Sends error details for other validation issues
      }
};

exports.addVisitedAttraction = async (req, res) => {
    try {
      const { email, attractionName } = req.body; // Form-urlencoded data
  
      // Find the visitor by email
      const visitor = await Visitor.findOne({ email });
      if (!visitor) {
        return res.status(404).send({ error: "Visitor not found." });
      }
  
      // Find the attraction by name
      const attraction = await Attraction.findOne({ name: attractionName });
      if (!attraction) {
        return res.status(404).send({ error: "Attraction does not exist." });
      }
  
      // Check if the attraction is already visited
      if (visitor.visitedAttractions.includes(attraction._id)) {
        return res.status(400).send({ error: "Attraction already visited." });
      }
  
      // Add the attraction to the visitor's visited list
      visitor.visitedAttractions.push(attraction._id);
      await visitor.save();
  
      res.status(200).send(visitor);
    } catch (err) {
      res.status(400).send({ error: err.message });
    }
  };


exports.getVisitorActivity = async (req, res) => {
    try {
      // Fetch all visitors and calculate the count of attractions they have reviewed
      const visitorActivity = await Visitor.aggregate([
        {
          $lookup: {
            from: 'reviews', // MongoDB collection name for reviews
            localField: '_id',
            foreignField: 'visitor',
            as: 'reviews',
          },
        },
        {
          $project: {
            name: 1,
            email: 1,
            reviewCount: { $size: '$reviews' },
          },
        },
      ]);
  
      res.status(200).send(visitorActivity);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  };
  

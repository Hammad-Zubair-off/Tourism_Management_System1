const Review = require("../models/Review");
const Attraction = require("../models/Attraction");
const Visitor = require("../models/Visitor");
exports.createReview = async (req, res) => {
    try {
      const { visitorEmail, attractionName, score, comment } = req.body; // Form-urlencoded data
  
      // Find the visitor by email
      const visitor = await Visitor.findOne({ email: visitorEmail });
      if (!visitor) {
        return res.status(404).send({ error: "Visitor not found." });
      }
  
      // Find the attraction by name
      const attraction = await Attraction.findOne({ name: attractionName });
      if (!attraction) {
        return res.status(404).send({ error: "Attraction does not exist." });
      }
  
      // Check if the visitor has already reviewed this attraction
      const existingReview = await Review.findOne({
        visitor: visitor._id,
        attraction: attraction._id,
      });
      if (existingReview) {
        return res.status(400).send({ error: "You have already reviewed this attraction." });
      }
  
      // Create the review
      const review = new Review({
        visitor: visitor._id,
        attraction: attraction._id,
        score,
        comment,
      });
      await review.save();
  
      // Update the attraction's average rating
      const reviews = await Review.find({ attraction: attraction._id });
      const avgRating = reviews.reduce((sum, r) => sum + r.score, 0) / reviews.length;
      await Attraction.findByIdAndUpdate(attraction._id, { rating: avgRating });
  
      res.status(201).send(review);
    } catch (err) {
      res.status(400).send({ error: err.message });
    }
  };

  
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  attraction: { type: mongoose.Schema.Types.ObjectId, ref: 'Attraction', required: true },
  visitor: { type: mongoose.Schema.Types.ObjectId, ref: 'Visitor', required: true },
  score: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String },
});

reviewSchema.index({ attraction: 1, visitor: 1 }, { unique: true });
// when a visitor tries to review an attraction more than once, the database will throw an error

module.exports = mongoose.model('Review', reviewSchema);

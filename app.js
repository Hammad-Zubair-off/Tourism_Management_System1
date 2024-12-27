const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/tourism_DB')
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error.message);
  });

const attractionRoutes = require('./routes/attractions');
const visitorRoutes = require('./routes/visitors');
const reviewRoutes = require('./routes/reviews');

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/attractions', attractionRoutes);
app.use('/visitors', visitorRoutes);
app.use('/reviews', reviewRoutes);


const PORT =3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
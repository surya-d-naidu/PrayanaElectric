import mongoose from 'mongoose';

const bikeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ['city', 'mountain', 'cruiser', 'folding', 'road', 'cargo']
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  range: {
    type: Number,
    required: true
  },
  chargingTime: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  available: {
    type: Boolean,
    default: true
  }
});

const Bike = mongoose.model('Bike', bikeSchema);

export default Bike;
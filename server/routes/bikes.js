import express from 'express';
import Bike from '../models/Bike.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Get all bikes
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    const query = category ? { category } : {};
    const bikes = await Bike.find(query);
    res.json(bikes);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get single bike
router.get('/:id', async (req, res) => {
  try {
    const bike = await Bike.findById(req.params.id);
    if (!bike) {
      return res.status(404).json({ message: 'Bike not found' });
    }
    res.json(bike);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Check bike availability
router.get('/:id/availability', async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    const bike = await Bike.findById(req.params.id);
    
    if (!bike) {
      return res.status(404).json({ message: 'Bike not found' });
    }

    // Check if bike is available for the given dates
    const bookings = await Booking.find({
      bike: req.params.id,
      status: { $ne: 'cancelled' },
      $or: [
        {
          startDate: { $lte: new Date(endDate) },
          endDate: { $gte: new Date(startDate) }
        }
      ]
    });

    res.json({ available: bookings.length === 0 });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router;
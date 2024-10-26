const express = require('express');
const Event = require('../models/Event');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const newEvent = new Event(req.body);
    await newEvent.save();
    res.status(201).send('Event created');
  } catch (error) {
    res.status(500).send('Error creating event');
  }
});

router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).send('Error fetching events');
  }
});

module.exports = router;
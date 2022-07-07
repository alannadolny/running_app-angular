const { application } = require('express');
const express = require('express');
const router = express.Router({ mergeParams: true });
const Acitivity = require('./activitiesSchema');

router.get('/', async (req, res) => {
  try {
    return res.send({ status: 'OK' });
  } catch (err) {
    return res.status(500).send(err);
  }
});

module.exports = router;

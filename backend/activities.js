const { application } = require('express');
const express = require('express');
const router = express.Router({ mergeParams: true });
const Acitivity = require('./activitiesSchema');

router.get('/', async (req, res) => {
  try {
    const activities = await Acitivity.aggregate([
      {
        $project: {
          __v: 0,
        },
      },
    ]);
    return res.send(activities);
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const activity = await Acitivity.findOne({ _id: req.params.id });
    return res.send(activity);
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newActivity = {
      ...req.body,
      time: new Date(req.body.finish) - new Date(req.body.start),
    };
    await Acitivity(newActivity).save();
    return res.send(newActivity);
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Acitivity.findOneAndDelete({ _id: req.params.id });
    return res.send({ deletedId: req.params.id });
  } catch (err) {
    return res.status(500).send(err);
  }
});

module.exports = router;

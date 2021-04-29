const { v1: uuid} = require('uuid');
const express = require('express');
const router = express.Router();

// Dates
const { compareDesc, format } = require('date-fns');


// Habit Schema Example
const habits = [
    {
        id: uuid(),
        user: 'Nathan Baylon',
        title: 'Programming',
        body: 'Program at least once a day',
        dates: [
            new Date(2021, 4, 22),
            new Date(2021, 4, 13),
            new Date(2021, 9, 3)
        ]
    }
];

// console.log(habits[0]);
// console.log(habits[0].dates.sort(compareDesc).map(date => format(date, 'dd/MM/yyyy')));

// @route   GET api/habits
// @desc    Returns a json array of all habits
// @access  Public
router.get('/', (req, res) => {
    res.json(habits);
});

module.exports = router;
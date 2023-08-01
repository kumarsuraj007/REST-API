import asyncHandler from 'express-async-handler';
import goalSchema from '../model/goalModel.js';

// @desc Get goals
// @route GET /api/goals
// @access Private 
export const getGoals = asyncHandler(async(req, res) => {
    const goals = await goalSchema.find();
    res.status(200).json(goals)
})

// @desc Post goals
// @route POST /api/goals
// @access Private
export const setGoals = asyncHandler(async(req, res) => {
    const saveGoal = await goalSchema.create({
        text: req.body.text
    });
    res.status(200).json(saveGoal)
})

// @desc Update goals
// @route PUT /api/goals/:id
// @access Private
export const updateGoals = asyncHandler(async(req, res) => {
    const findGoal = await goalSchema.findById(req.params.id);
    if(!findGoal) {
        res.status(400);
        throw new Error('Goal not found!')
    }
    const updatedGoal = await goalSchema.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    res.status(200).send(updatedGoal)
})

// @desc Delete goals
// @route DELETE /api/goals/:id
// @access Private
export const deleteGoals = asyncHandler(async(req, res) => {
    const {id} = req.params;
    const findGoal = await goalSchema.findById(id);
    if(!findGoal) {
        res.status(400);
        throw new Error('Goal not found!')
    }
    const deletedGoal = await goalSchema.findByIdAndRemove(id)
    res.status(200).json(`Deleted Successfully ${id}`)
})
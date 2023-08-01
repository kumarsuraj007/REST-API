import express from 'express';
const router = express.Router();

import {getGoals, setGoals, updateGoals, deleteGoals} from '../controller/goalController.js';
router.route('/').get(getGoals).post(setGoals);
router.route('/:id').put(updateGoals).delete(deleteGoals);

export default router;
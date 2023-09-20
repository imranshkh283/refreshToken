import { Router } from "express";
import auth from '../middleware/auth.js';

const router = Router();

router.get('/details', auth, (req, res) => {
    let { ...users } = req.user
    res.status(200).json({ message: "user authenticated.", 'data': users._id });
})

export default router;
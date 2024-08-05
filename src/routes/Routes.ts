import { Router } from 'express';
import { getReviewsByUniversity } from '../controllers/reviewController';
import { getAllUniversities } from '../controllers/universityController';

const router = Router();

router.get('/reviews/:university_id', getReviewsByUniversity);
router.get('/universities', getAllUniversities);


export default router;

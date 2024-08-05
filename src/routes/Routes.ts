import { Router } from 'express';
import { getReviewsByUniversity } from '../controllers/reviewController';
import { getAllUniversities, getUniversityByToken } from '../controllers/universityController';
import { login, register } from '../controllers/authController';
import { insertReview } from '../controllers/insertReview';
import { createOneTimeLink } from '../controllers/oneTimeLinkController';

const router = Router();

router.get('/reviews/:university_id', getReviewsByUniversity);
router.get('/universities', getAllUniversities);

router.post('/auth/register', register);
router.post('/auth/login', login);


router.post('/insertreview', insertReview);
router.post('/onetimelink', createOneTimeLink);

router.get('/university/:token', getUniversityByToken);
export default router;

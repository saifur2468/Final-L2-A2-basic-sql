import { Router } from 'express';

import {
    createIssue,
    getAllIssues,
    getSingleIssue,
    updateIssue,
    deleteIssue
} from './issues.controller.js';

import {
    authenticate,
    authorize
} from '../../middleware/auth.middleware.js';

import { validateIssue }
    from '../../middleware/validate.middleware.js';

const router = Router();

router.post(
    '/',
    authenticate,
    validateIssue,
    createIssue
);

router.get('/', getAllIssues);

router.get('/:id', getSingleIssue);

router.patch(
    '/:id',
    authenticate,
    updateIssue
);

router.delete(
    '/:id',
    authenticate,
    authorize('maintainer'),
    deleteIssue
);

export default router;
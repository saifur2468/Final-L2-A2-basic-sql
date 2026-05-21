import express, {
  type Application
} from 'express';

import 'dotenv/config';

import cors from 'cors';

import authRouter
from './modules/auth/auth.router.js';

import issuesRouter
from './modules/issues/issues.router.js';

import { errorHandler }
from './middleware/error.middleware.js';

const app: Application = express();

app.use(cors());

app.use(express.json());


//  Root Route
app.get('/', (req, res) => {
  res.send('DevPulse API Running ');
});


app.use('/api/auth', authRouter);

app.use('/api/issues', issuesRouter);

app.use(errorHandler);

export default app;
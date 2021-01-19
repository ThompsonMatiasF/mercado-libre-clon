import express from 'express'
import appRouter from './app.router'
import apiRouter from './api.router'

const router = express.Router()

router
  .use('/api', apiRouter)
  .use('/', appRouter);

export default router;

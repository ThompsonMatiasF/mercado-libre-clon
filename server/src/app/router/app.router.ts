import express from 'express'
import { appController } from '../controllers'

const router = express.Router()

router
  .get(/^\/.*$/, appController.getApp);

export default router;

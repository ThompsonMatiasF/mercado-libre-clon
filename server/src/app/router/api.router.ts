import express, { Request, Response, NextFunction } from 'express'
import { apiController } from '../controllers'

const router = express.Router()

interface AuthorRequest extends Request {
  author: {}
}

router.use('', (req: any, res: Response, next: NextFunction) => {
  req.author = {
    name: process.env.AUTHOR_NAME,
    lastName: process.env.AUTHOR_LASTNAME,
  };
  next();
});

router
  .get('/items', apiController.getItems)
  .get('/items/:id', apiController.getItem);

router.use('/', (err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status).json(err);
});

export default router;

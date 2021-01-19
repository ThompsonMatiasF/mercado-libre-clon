import express, {ErrorRequestHandler, RequestHandler} from 'express'
import path from 'path'
import cors from 'cors'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import sassMiddleware from 'node-sass-middleware'
import createError from 'http-errors'
import router from './router'
import { env } from 'custom-env'

env(process.env.NODE_ENV, path.join(__dirname, '..', 'environments'))

const app = express()

const corsOptions = {
  origin: [`${process.env.FRONT_PROTOCOL}://${process.env.FRONT_DOMAIN}`],
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization', 'Cookie', 'Set-Cookie'],
  exposedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization', 'Cookie', 'Set-Cookie'],
  credentials: true,
};

const notFoundHandler: RequestHandler = (req, res, next) => {
  next(createError(404))
}

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
}

app
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'pug')
  .set('port', process.env.BACK_PORT || 8080);

app
  .use(cors(corsOptions))
  .use(logger('dev'))
  .use(express.json({limit: '500mb'}))
  .use(express.urlencoded({extended: true}))
  .use(cookieParser())
  .use(sassMiddleware({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: false, // true = .sass and false = .scss
    sourceMap: true
  }))
  .use(express.static(path.join(__dirname, 'public')))
  .use('/', router) // Endpoints
  .use(notFoundHandler)
  .use(errorHandler);


export default app;

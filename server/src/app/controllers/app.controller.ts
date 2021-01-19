import { RequestHandler } from 'express'
import logger from 'debug'

const loggerDev = logger('dev:app.controller');

const getApp: RequestHandler = (req, res) => {
  loggerDev(`  -  🤓 send WebApp to client`);
  res.render("index", {title: 'App'});
};

export default {
  getApp,
};

import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/', (req, res) => {
  return res.json({
    message: 'Hello World!'
  }); 
});

router.post('/teste', (req, res) => {
  res.sendStatus(StatusCodes.ACCEPTED).json(req.body);
});

export { router };

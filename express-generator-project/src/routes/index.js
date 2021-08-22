import express from 'express';
const router = express.Router();
import Message from '../domain/Message';
import { getErrorStatus } from '../utils/errorHandlers';

router.get('/', (req, res) => {
  res.status(200).json({message: 'Welcome to your server'});
});

router.post('/message', (req, res) => {
  console.log('received request to save message: ', req.body);
  try {
    const newMessage = new Message(req.body);
    MessageService.submit(req.body);
  } catch(err) {
    res.status(getErrorStatus(err)).send(err.message);
    console.log(err);
  }
})

export default router;

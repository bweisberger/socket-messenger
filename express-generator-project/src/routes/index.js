import express from 'express';
const router = express.Router();
import MessageService from '../services/MessageService';
import UserService from '../services/UserService';
import { getErrorStatus } from '../utils/errorHandlers';

router.get('/', (req, res) => {
  res.status(200).json({message: 'Welcome to your server'});
});

router.post('/message', (req, res) => {
  console.log('received request to save message: ', req.body);
  try {
    MessageService.submit(req.body);
    res.status(200).json({succeeded: true});
  } catch(err) {
    res.status(getErrorStatus(err)).send(err.message);
    console.log('request to save message failed:', err);
  }
})

router.post('/user', (req, res) => {
  console.log('received request to create new user: ', req.body);
  try {
    UserService.createNewUser(req.body);
    res.status(200).json({succeeded: true});
  } catch(err) {
    res.status(getErrorStatus(err)).send(err.message);
    console.log('request to create new user failed:', err);
  }
});

export default router;

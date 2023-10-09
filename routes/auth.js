import express from 'express';
import { login, register } from '../controllers/auth.js';

const router = express.Router(); // Router is a method in express which helps in routing the request to the specified path in the server.

// @route   GET api/auth
router.post('/register', register);
router.post('/login', login);


export default router;


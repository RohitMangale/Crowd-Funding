
import express from 'express';
import { register,login } from '../Controllers/authController.js';

const router = new express.Router();

//create user route
router.post('/',register);

//login user route
router.post('/login', login);


export {router as authRoute};





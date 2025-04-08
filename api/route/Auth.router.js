import express from 'express'
import { login } from '../controller/Auth.controller.js'; 

const AuthRoute = express.Router()
AuthRoute.post('/google-login', login)
export default AuthRoute
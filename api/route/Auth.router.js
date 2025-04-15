import express from 'express'
import { getUser , login, logout } from '../controller/Auth.controller.js'; 

const AuthRoute = express.Router()
AuthRoute.post('/google-login', login)
AuthRoute.get('/get-user', getUser)
AuthRoute.post('/logout-user', logout)
export default AuthRoute

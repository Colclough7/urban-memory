import express from "express";
const router = express.Router()
import {homeRoutes,addUser,updateUser } from '../services/render.js'
import {create,find,update,del} from '../controller/controller.js'

router.get('/',homeRoutes)
router.get('/add-user',addUser)
router.get('/update-user',updateUser)

router.post('/api/users', create);
router.get('/api/users', find);
router.put('/api/users/:id', update);
router.delete('/api/users/:id', del);
export default router











import express from 'express'
import { createItem } from '../controllers/createItem'
import { getAllItems } from '../controllers/getAllItems'
import { getSingleItem } from '../controllers/getSingleItem'
import { completeItem } from '../controllers/completeItem'
import { deleteItem } from '../controllers/deleteItem'
import { updateItem } from '../controllers/updateItem'

const router = express.Router()

router.post('/create', createItem)
router.get('/getAllItems', getAllItems)
router.get('/getSingleItem/:id', getSingleItem)
router.get('/updateItem/:id', updateItem)
router.get('/completeItem/:id', completeItem)
router.get('/deleteItem/:id', deleteItem)

export default router;
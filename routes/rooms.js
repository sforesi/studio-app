import { Router } from 'express'
import * as roomsCtrl from '../controllers/rooms.js'

const router = Router()

// localhost:3000/rooms/new - GET
router.get("/new", roomsCtrl.new)
// localhost:3000/rooms
router.post("/", roomsCtrl.create)

router.get("/", roomsCtrl.index)

export {
  router
}
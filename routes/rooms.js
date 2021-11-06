import { Router } from 'express'
import * as roomsCtrl from '../controllers/rooms.js'

const router = Router()

// localhost:3000/rooms/new - GET
router.get("/new", roomsCtrl.new)
// localhost:3000
router.get("/", roomsCtrl.index)
// localhost:3000/rooms/:id
router.get("/:id", roomsCtrl.show)
// localhost:3000/rooms
router.post("/", roomsCtrl.create)


export {
  router
}
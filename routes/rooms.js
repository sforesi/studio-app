import { Router } from 'express'
import * as roomsCtrl from '../controllers/rooms.js'
import { isLoggedIn } from '../middleware/middleware.js'


const router = Router()

// localhost:3000/rooms/new - GET
router.get("/new", roomsCtrl.new)
// localhost:3000
router.get("/", roomsCtrl.index)
// localhost:3000/rooms/:id
router.get("/:id", roomsCtrl.show)
// localhost:3000/rooms
router.post("/", roomsCtrl.create)


 // localhost:3000/room/:id/switch-reserved - PATCH
 router.patch("/:id/switch-reserved", isLoggedIn, roomsCtrl.switchReserved)

export {
  router
}
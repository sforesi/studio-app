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
// localhost:3000/rooms/:id/edit
router.get("/:id/edit", roomsCtrl.edit)

// localhost:3000/rooms
router.post("/", roomsCtrl.create)


// localhost:3000/room/:id/switch-reserved - PATCH
router.patch("/:id/switch-reserved", isLoggedIn, roomsCtrl.switchReserved)

// localhost:3000/rooms/:id - PUT
router.put("/:id", isLoggedIn, roomsCtrl.update)

// localhost:3000/rooms/:id - DELETE
router.delete("/:id", isLoggedIn, roomsCtrl.delete)


export {
  router
}
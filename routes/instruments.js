import { Router } from 'express'
import * as instrumentsCtrl from "../controllers/instruments.js"
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// localhost:3000/instrument - GET
router.get("/new", instrumentsCtrl.index)

// localhost:3000/instruments/:id - GET
// router.get("/:id", instrumentsCtrl.show)

// localhost:3000/instruments/:id/edit
// router.get("/:id/edit", instrumentsCtrl.edit)

// localhost:3000/instruments - POST
router.post("/", isLoggedIn, instrumentsCtrl.create)

// localhost:3000/instrument/:id/switch-reserved - PATCH
// router.patch("/:id/switch-reserved", isLoggedIn, instrumentsCtrl.switchReserved)

// localhost:3000/instruments/:id - PUT
// router.put("/:id", isLoggedIn, instrumentsCtrl.update)

// localhost:3000/instruments/:id - DELETE
// router.delete("/:id", isLoggedIn, instrumentsCtrl.delete)

export {
  router
}
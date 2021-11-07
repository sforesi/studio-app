  import { Router } from 'express'
  import * as instrumentsCtrl from '../controllers/instruments.js'
  import { isLoggedIn } from '../middleware/middleware.js'
  
  const router = Router()
  
  // localhost:3000/instruments/new - GET
  router.get("/new", instrumentsCtrl.new)
  // localhost:3000
  router.get("/", instrumentsCtrl.index)
  // localhost:3000/instruments/:id
  router.get("/:id", instrumentsCtrl.show)
  // localhost:3000/instruments/:id/edit
  router.get("/:id/edit", instrumentsCtrl.edit)
  
  // localhost:3000/instruments
  router.post("/", isLoggedIn, instrumentsCtrl.create)
  
  // localhost:3000/instrument/:id/switch-reserved - PATCH
  router.patch("/:id/switch-reserved", isLoggedIn, instrumentsCtrl.switchReserved)
  
  // localhost:3000/instruments/:id - PUT
  router.put("/:id", isLoggedIn, instrumentsCtrl.update)

export {
  router
}
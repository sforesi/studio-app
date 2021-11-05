import { Router } from 'express'
import * as roomsCtrl from '../controllers/rooms.js'

const router = Router()

// localhost:3000/movies/new - GET
router.get("/new", roomsCtrl.new)

export {
  router
}
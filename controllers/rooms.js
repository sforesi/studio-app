// Importing the Room model
import { Room } from "../models/room.js"

function newRoom (req, res) {
  res.render("rooms/new", {
    title: "Add Room",
  })
}

export {
  newRoom as new, 
}
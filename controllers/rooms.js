// Importing the Room model
import { Room } from "../models/room.js"

function newRoom (req, res) {
  res.render("rooms/new", {
    title: "Add Room",
  })
}

function create(req, res) {
  Room.create(req.body)
  .then(room => {
    res.redirect("/rooms")
  })
  .catch(err => {
    console.log(err)
    res.redirect("/rooms")
  })
}

function index(req, res) {
  // Find all rooms
  Room.find({})
  // When we have the rooms
  .then(rooms => {
    // Do something with the rooms
    res.render("rooms/index", {
      title: "ROOMS",
      rooms,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/rooms")
  })
}
export {
  newRoom as new, 
  create,
  index,
}
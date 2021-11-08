// Importing the Room model
import { Room } from "../models/room.js"

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
  // Catch errors if there are any 

  .catch(err => {
    console.log(err)
    res.redirect("/rooms")
  })
}

function newRoom (req, res) {
  res.render("rooms/new", {
    title: "ADD ROOM",
  })
  .catch(err => {
    console.log(err)
    res.redirect("/rooms")
  })
}

function create(req, res) {
  req.body.reserved = !!req.body.reserved
  req.body.smoking = !!req.body.smoking
  Room.create(req.body)
  .then(room => {
    res.redirect("/rooms")
  })
  .catch(err => {
    console.log(err)
    res.redirect("/rooms")
  })
}


function show (req, res) {
  Room.findById(req.params.id)
  .then(room => {
    res.render("rooms/show", {
      room,
      title: "ROOM DETAILS"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/rooms")
  })
}

function switchReserved (req, res) {
  Room.findById(req.params.id)
  .then(room => {
    room.reserved = !room.reserved
    room.save()
    .then(() => {
      res.redirect(`/rooms/${room._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/rooms")
  })
}

function edit(req, res) {
  Room.findById(req.params.id)
  .then(room => {
    res.render("rooms/edit", {
      title: "EDIT ROOM",
      room,

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
  show,
  switchReserved,
  edit,
}
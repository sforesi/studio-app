// Importing the Room model
import { Room } from "../models/room.js"
import { Instrument } from "../models/instrument.js"

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
  .populate("instruments")

  .then(room => {
    Instrument.find({_id: {$nin: room.instruments}})
    .then(unreservedInstruments => {
      console.log('SEE ME', unreservedInstruments)
      res.render("rooms/show", {
        room,
        title: "ROOM DETAILS",
        unreservedInstruments,
      })
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

function update(req, res) {
  Room.findById(req.params.id)
  .then(room => {
    if (room.owner.equals(req.user.profile._id)) {
      // the person that created the room is trying to edit the room
      req.body.reserved = !!req.body.reserved
      room.updateOne(req.body, {new: true})
      .then(() => {
        res.redirect(`/rooms/${room._id}`)
      })
    } else {
      // the person that created the room is NOT the person trying to edit the room
      throw new Error ("🚫 Not Authorized! 🚫")
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect("/instruments")
  })
}

function deleteRoom(req, res) {
  Room.findById(req.params.id)
  .then(room => {
    if (room.owner.equals(req.user.profile._id)) {
      // the person that created the room is trying to delete the room
      room.delete()
      .then(() => {
        res.redirect("/rooms")
      })
    } else {
      // the person that created the room is NOT the person trying to delete the room
      throw new Error ("🚫 Not Authorized! 🚫")
    }
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
  update,
  deleteRoom as delete,
}
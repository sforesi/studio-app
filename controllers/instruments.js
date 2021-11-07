// Importing the Room model
import { Instrument } from "../models/instrument.js"

function index(req, res) {
  // Find all instruments
  Instrument.find({})
  // When we have the instruments
  .then(instruments => {
    // Do something with the instruments
    res.render("instruments/index", {
      title: "instruments",
      instruments,
    })
  })
  // Catch errors if there are any 
  .catch(err => {
    console.log(err)
    res.redirect("/instruments")
  })
}
function newInstrument (req, res) {
  res.render("instruments/new", {
    title: "Add Instrument",
  })
  .catch(err => {
    console.log(err)
    res.redirect("/instruments")
  })
}

function create(req, res) {
  req.body.reserved = !!req.body.reserved
  req.body.smoking = !!req.body.smoking
  Instrument.create(req.body)
  .then(instrument => {
    res.redirect("/instruments")
  })
  .catch(err => {
    console.log(err)
    res.redirect("/instruments")
  })
}


function show (req, res) {
  Instrument.findById(req.params.id)
  .then(instrument => {
    res.render("instruments/show", {
      instrument,
      title: "details"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/instruments")
  })
}


function switchReserved (req, res) {
  Instrument.findById(req.params.id)
  .then(instrument => {
    instrument.reserved = !instrument.reserved
    instrument.save()
    .then(() => {
      res.redirect(`/instruments/${instrument._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/instruments")
  })
}

function edit(req, res) {
  Instrument.findById(req.params.id)
  .then(instrument => {
    res.render("instruments/edit", {
      title: "Edit Instrument",
      instrument,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/instruments")
  })
}

function update(req, res) {
  Instrument.findById(req.params.id)
  .then(instrument => {
    if (instrument.owner.equals(req.user.profile._id)) {
      // the person that created the instrument is trying to edit the instrument
      req.body.reserved = !!req.body.reserved
      instrument.updateOne(req.body, {new: true})
      .then(() => {
        res.redirect(`/instruments/${instrument._id}`)
      })
    } else {
      // the person that created the instrument is NOT the person trying to edit the instrument
      throw new Error ("🚫 Not Authorized! 🚫")
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect("/instruments")
  })
}

// function deleteInstrument(req, res) {
//   Instrument.findById(req.params.id)
//   .then(instrument => {
//     if (instrument.owner.equals(req.user.profile._id)) {
//       // the person that created the instrument is trying to delete the instrument
//       instrument.delete()
//       .then(() => {
//         res.redirect("/instruments")
//       })
//     } else {
//       // the person that created the instrument is NOT the person trying to delete the instrument
//       throw new Error ("🚫 Not Authorized! 🚫")
//     }
//   })
//   .catch(err => {
//     console.log(err)
//     res.redirect("/instruments")
//   })
// }


export {
  newInstrument as new, 
  create,
  index,
  show,
  switchReserved,
  edit,
  update,
  //   deleteInstrument as delete
}
import mongoose from 'mongoose'

const Schema = mongoose.Schema

const roomSchema = new Schema({
  name: String,
  reserved: Boolean,
  smoking: Boolean,
  price: {type: Number, min: 0, max: 1000},
  instruments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Instrument'}]
})

const Room = mongoose.model('Room', roomSchema)

export {
  Room,
}
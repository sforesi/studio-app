import mongoose from 'mongoose'

const Schema = mongoose.Schema

const roomSchema = new Schema({
  name: String,
  reserved: Boolean,
  smoking: Boolean,
})

const Room = mongoose.model('Room', roomSchema)

export {
  Room,
}
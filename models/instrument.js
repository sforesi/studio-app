import mongoose from 'mongoose'

const Schema = mongoose.Schema

const instrumentSchema = new Schema({
  name: String,
  reserved: Boolean,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  price: {type: Number, min: 0, max: 1000}
})

const Instrument = mongoose.model('Instrument', instrumentSchema)

export {
  Instrument,
}
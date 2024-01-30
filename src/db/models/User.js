const mongoose = require('mongoose')
const { model, Schema } = mongoose

const userSchema = new Schema({
  userId: { type: String, unique: true, required: true },
  username: { type: String, unique: true, required: true },
  email: { type: String },
  apps: [{ type: Schema.Types.ObjectId, ref: 'App' }],
  notes: [{ type: Schema.Types.ObjectId, ref: 'Note' }]
})

module.exports = mongoose.models?.User || model('User', userSchema)

const mongoose = require('mongoose')
const { model, Schema } = mongoose

const userSchema = new Schema({
  userId: { type: String, unique: true },
  username: { type: String, unique: true },
  email: { type: String }
})

module.exports = mongoose.models?.User || model('User', userSchema)

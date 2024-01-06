const mongoose = require('mongoose')
const mongooseUniqueValidator = require('mongoose-unique-validator')
const { model, Schema } = mongoose

const userSchema = new Schema({
  userId: { type: String, unique: true },
  username: { type: String, unique: true },
  email: { type: String }
})

userSchema.plugin(mongooseUniqueValidator)

module.exports = mongoose.models?.User || model('User', userSchema)

const mongoose = require('mongoose')
const { model, Schema } = mongoose

const appsSchema = new Schema(
  {
    name: { type: String, require: true },
    url: { type: String, require: true },
    user: { type: String, require: true }
  },
  { strict: false }
)

module.exports = mongoose.models?.App || model('App', appsSchema)

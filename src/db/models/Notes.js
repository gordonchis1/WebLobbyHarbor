// ! las notas estan en markdawn pero se almacenan en texto plano
// ! el esquema es un nombre una ruta y el contenido

// ? Talvez poner la ruta como un nuevo esquema ya que si no tendriamos que hacer 4 peticiones de las notas los links y las carpetas asi solo llamamos a la ruta

const mongoose = require('mongoose')
const { Schema, model } = mongoose

const noteSchema = new Schema({
  name: { type: String },
  content: { type: String },
  path: { type: String },
  userId: { type: String }
})

module.exports = mongoose.models?.Note || model('Note', noteSchema)

import mongoose from 'mongoose'

const MONGO_DB_CONECTIONSTRING = process.env.MONGO_DB_CONECTIONSTRING

if (!MONGO_DB_CONECTIONSTRING) {
  throw new Error('MONGO_DB_CONECTIONSTRING is not defined.')
}

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null }
}

export const dbConnect = async () => {
  if (cached.conn) return cached.conn

  cached.conn = await mongoose.connect(MONGO_DB_CONECTIONSTRING)

  return cached.conn
}

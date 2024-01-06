'use server'
import { dbConnect } from '../../db/db'
import User from '../../db/models/User'

export const getAllUsers = async () => {
  dbConnect()
  const users = await User.find()
  return users
}

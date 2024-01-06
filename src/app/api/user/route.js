'use server'
import { dbConnect } from '../../../db/db'
import User from '../../../db/models/User'
import { NextResponse } from 'next/server'

export async function GET(request) {
  try {
    await dbConnect()
    console.log('db connected')
    const users = await User.find()
    return NextResponse.json(users)
  } catch (error) {
    return NextResponse.error(error)
  }
}

export async function POST(request) {
  const data = await request.json()
  try {
    await dbConnect()
    console.log('db connected')
    const newUser = new User({
      username: data.username,
      userId: data.userId,
      email: data.email
    })
    const createUser = await newUser.save()
    return NextResponse.json(createUser)
  } catch (error) {
    return NextResponse.error(error)
  }
}

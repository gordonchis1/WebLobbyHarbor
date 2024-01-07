import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import { dbConnect } from '../../../db/db'
import User from '../../../db/models/User'

export async function GET(req) {
  return NextResponse.json({ congratulatio: 'lfkadkj' })
}

export async function POST(req) {
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET

  if (!WEBHOOK_SECRET) {
    throw new Error(
      'Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local'
    )
  }

  // Get the headers
  const headerPayload = headers()
  const svixId = headerPayload.get('svix-id')
  const svixTimestamp = headerPayload.get('svix-timestamp')
  const svixSignature = headerPayload.get('svix-signature')

  // If there are no headers, error out
  if (!svixId || !svixTimestamp || !svixSignature) {
    return new Response('Error occured -- no svix headers', {
      status: 400
    })
  }

  // Get the body
  const payload = await req.json()
  const body = JSON.stringify(payload)

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET)

  let evt

  // Verify the payload with the headers
  try {
    // eslint-disable-next-line no-unused-vars
    evt = wh.verify(body, {
      'svix-id': svixId,
      'svix-timestamp': svixTimestamp,
      'svix-signature': svixSignature
    })
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Error occured', {
      status: 400
    })
  }

  const { username, id } = JSON.parse(body).data

  const email = JSON.parse(body).data.email_addresses[0].email_address
  try {
    await dbConnect()
    console.log('db connected')
    const newUser = new User({
      username,
      userId: id,
      email
    })

    const createUser = await newUser.save()

    return NextResponse.json(createUser, { status: 201 })
  } catch (error) {
    return NextResponse.error(error)
  }
}

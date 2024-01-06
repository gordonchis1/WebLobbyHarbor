import { UserButton } from '@clerk/nextjs'

export default function AuthUser({ user }) {
  return (
    <div className="flex items-center justify-center">
      <UserButton afterSignOutUrl="/" />
      <p className="ml-1">{'@' + user.username}</p>
    </div>
  )
}

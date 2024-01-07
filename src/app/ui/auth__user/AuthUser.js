import { UserButton } from '@clerk/nextjs'

export default function AuthUser({ user }) {
  return (
    <div className="flex items-center justify-center text-white">
      <UserButton afterSignOutUrl="/" showName />
    </div>
  )
}

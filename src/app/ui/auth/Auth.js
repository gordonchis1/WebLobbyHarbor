'use client'
import { useUser } from '@clerk/nextjs'
import AuthUser from '../auth__user/AuthUser'
import AuthSignButtons from '../auth__sign-buttons/AuthSignButtons'
import { Button } from '@nextui-org/react'
import('./auth.css')

// ! componetizar

export default function User() {
  const { user, isSignedIn, isLoaded } = useUser()

  if (!isLoaded) {
    return (
      <Button
        className="mt-3 mr-5 w-auto"
        color="primary"
        size="large"
        isLoading
      >
        Loading
      </Button>
    )
  }

  return (
    <div className="user__container">
      {isSignedIn && user ? <AuthUser user={user} /> : <AuthSignButtons />}
    </div>
  )
}

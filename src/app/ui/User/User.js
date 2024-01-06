'use client'

import { faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons'
import { UserButton, useUser } from '@clerk/nextjs'
import SignButton from '../sign__button/SignButton'
import('./user.css')

export default function User() {
  const { user, isSignedIn } = useUser()

  return (
    <div className="user__container">
      {isSignedIn && user ? (
        <div className="flex items-center justify-center">
          <UserButton afterSignOutUrl="/" />
          <p className="ml-1 mb-2">{'@' + user.username}</p>
        </div>
      ) : (
        <>
          {/* crear cuenta */}
          <SignButton
            className={'bg-emerald-500 mr-3'}
            icon={faRightFromBracket}
            href={'/sign-up'}
            text={'Sign up'}
          />
          <SignButton
            radius="sm"
            variant="flat"
            href="/sign-in"
            icon={faUser}
            text={'Sign in'}
          ></SignButton>
        </>
      )}
    </div>
  )
}

'use client'

import { faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import('./user.css')

export default function User () {
  return (
    <div className='user__container'>
        <Button as={Link} href='/auth/signup' className="bg-emerald-500 mr-3" radius="sm">
            <FontAwesomeIcon icon={faRightFromBracket}/>Sign up
            {/* crear cuenta */}
        </Button>
        <Button radius='sm' variant='flat'>
            <FontAwesomeIcon icon={faUser}/>Sign in
        </Button>
    </div>
  )
}

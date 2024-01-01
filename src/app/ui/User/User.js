'use client'

import { faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import('./user.css')

export default function User () {
  return (
    <div className='user__container'>
        <Button as={Link} href='/login' className="bg-emerald-500 mr-3" radius="sm">
            <FontAwesomeIcon icon={faRightFromBracket}/>Login
        </Button>
        <Button radius='sm' variant='flat'>
            <FontAwesomeIcon icon={faUser}/>Sign in
        </Button>
    </div>
  )
}

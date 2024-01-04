'use client'

import { Link } from '@nextui-org/react'
import { usePathname } from 'next/navigation'

export default function AuthFooter () {
  const phatname = usePathname()
  const filter = phatname.includes('signin')

  return (
    <footer>
        <span className="text-sm">{filter ? "Don't have an account? " : 'Already have an account? '}
            <Link href={filter ? '/auth/signup' : '/auth/signin'} className='text-sky-400 underline'>{filter ? 'Sign Up' : 'Sign In'}</Link>
        </span>
    </footer>
  )
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AuthFooter from '../ui/auth__footer/AuthFooter'
import { Link } from '@nextui-org/react'
import { faHome } from '@fortawesome/free-solid-svg-icons'

import('./authglobal.css')

export default function LoginLayout ({ children }) {
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex justify-center items-center flex-col">
        <Link href={'/'} className='w-9 absolute left-0 top-0 mt-2 ml-2 text-slate-950'><FontAwesomeIcon icon={faHome}/></Link>

        <main className="bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg shadow rounded-lg flex items-center flex-col px-20 py-10 h-min mb-3">
          {children}
        </main>
        <AuthFooter/>
    </div>
  )
}

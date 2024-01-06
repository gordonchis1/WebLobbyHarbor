import { SignUp } from '@clerk/nextjs'
import { Link } from '@nextui-org/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

//! refactorizar sign-in y sign-up
export default function Page() {
  return (
    <div className="h-screen w-screen flex justify-center items-center  bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <Link
        href={'/'}
        className="w-7 absolute left-0 top-0 right-0 mt-2 ml-2 text-slate-950"
      >
        <FontAwesomeIcon icon={faHome} />
      </Link>
      <SignUp afterSignInUrl="/" />
    </div>
  )
}

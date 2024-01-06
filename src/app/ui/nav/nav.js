import Settings from '../settings/settings'
import User from '../auth/Auth'
import('./nav.css')

//! componetizar los elementos
//! aggregar animacion container

export default function Nav() {
  return (
    <nav className="absolute right-0 top-0 w-auto h-auto flex justify-between z-100">
      <User />
      <Settings />
    </nav>
  )
}

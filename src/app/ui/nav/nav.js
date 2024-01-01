import Settings from '../settings/settings'
import User from '../User/User'
import('./nav.css')

//! componetizar los elementos
//! aggregar animacion container

export default function Nav () {
  return (
    <nav className="nav__top">
      <User/>
      <Settings/>
    </nav>
  )
}

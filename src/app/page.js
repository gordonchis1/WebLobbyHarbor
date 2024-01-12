import Search from './ui/search/search'
import Nav from './ui/nav/nav'
import { spotifySearch } from './lib/server__acctions'

// ! optimizar los iconos de fontawesome
//! arreglar las etiquetas de HTML
//! agregar los atajos de teclado con un custom hook

export default async function Page() {
  return (
    <div className="grid place-content-center h-screen w-screen  md:mx-auto main__page-container backdrop-blur">
      <Nav />
      <Search />
    </div>
  )
}

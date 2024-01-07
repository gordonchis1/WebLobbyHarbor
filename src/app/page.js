import Search from './ui/search/search'
import Nav from './ui/nav/nav'
import GetSpotify from './ui/spotfy__auth/GetSpotify'
// ! optimizar los iconos de fontawesome
//! arreglar las etiquetas de HTML
//! agregar los atajos de teclado con un custom hook

export default async function Page({ searchParams }) {
  return (
    <div className="grid place-content-center h-screen w-screen  md:mx-auto main__page-container backdrop-blur">
      <Nav />
      <Search />
      <GetSpotify searchParams={searchParams} />
    </div>
  )
}

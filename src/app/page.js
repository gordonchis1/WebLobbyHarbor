import Search from './ui/search/search'
import Nav from './ui/nav/nav'

//! arreglar las etiquetas de HTML

export default function Page () {
  return (
    <div className="grid place-content-center h-screen w-screen  md:mx-auto main__page-container backdrop-blur">
      <Nav/>
      <Search/>
    </div>
  )
}

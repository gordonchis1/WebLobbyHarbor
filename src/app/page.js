import Search from './ui/search/search'
import Nav from './ui/nav/nav'
import { auth } from '@clerk/nextjs'

//! arreglar las etiquetas de HTML
//! agregar los atajos de teclado con un custom hook

export default function Page() {
  const { userId } = auth()

  console.log(userId)
  return (
    <div className="grid place-content-center h-screen w-screen  md:mx-auto main__page-container backdrop-blur">
      <Nav />
      <Search />
    </div>
  )
}

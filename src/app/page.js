import Search from './ui/search/search'
import Nav from './ui/nav/nav'
import Content from './ui/Content/Content'
import NotesAddElement from './ui/notes__add-element/NotesAddElement'
import NotesEditor from './ui/notes__editor/NotesEditor'

// ! optimizar los iconos de fontawesome
//! arreglar las etiquetas de HTML
//! agregar los atajos de teclado con un custom hook

export default async function Page({ searchParams }) {
  return (
    <div className="grid place-content-center h-screen w-screen  md:mx-auto main__page-container backdrop-blur">
      <Nav />
      <div className="h-[100vh] z-5 w-screen flex flex-col items-center left-0  bottom-0 justify-center">
        <Search />
        <Content searchParams={searchParams}></Content>
        <NotesAddElement searchParams={searchParams}></NotesAddElement>
        <NotesEditor searchParams={searchParams}></NotesEditor>
      </div>
    </div>
  )
}

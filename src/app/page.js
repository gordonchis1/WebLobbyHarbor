import Search from './ui/search/search'
import Nav from './ui/nav/nav'
import FastApps from './ui/fast__apps/FastApps'
import Bento from './ui/bento/Bento'
import { Suspense } from 'react'
import { BentoSkeleton } from './ui/Skeletons/Skeletons'

// ! optimizar los iconos de fontawesome
//! arreglar las etiquetas de HTML
//! agregar los atajos de teclado con un custom hook

export default async function Page({ searchParams }) {
  return (
    <div className="grid place-content-center h-screen w-screen  md:mx-auto main__page-container backdrop-blur">
      <Nav />
      <div className="h-[90vh] z-5 w-screen flex flex-col items-center  absolute left-0  bottom-0 justify-around">
        <Search />
        <div className="flex flex-col h-auto w-auto">
          <FastApps searchParams={searchParams} />

          <Suspense fallback={<BentoSkeleton />}>
            <Bento></Bento>
          </Suspense>
        </div>
      </div>
    </div>
  )
}

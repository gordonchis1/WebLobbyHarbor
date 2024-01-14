import Search from './ui/search/search'
import Nav from './ui/nav/nav'
import FastApps from './ui/fast__apps/FastApps'
import { cookies } from 'next/headers'
import { auth } from '@clerk/nextjs'
import User from '../db/models/User'
import { dbConnect } from '../db/db'

// ! optimizar los iconos de fontawesome
//! arreglar las etiquetas de HTML
//! agregar los atajos de teclado con un custom hook

export default async function Page() {
  return (
    <div className="grid place-content-center h-screen w-screen  md:mx-auto main__page-container backdrop-blur">
      <Nav />
      <Search />
      <FastApps />
    </div>
  )
}

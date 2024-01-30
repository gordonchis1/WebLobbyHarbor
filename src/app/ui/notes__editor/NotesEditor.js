'use client'

import { Button, Divider } from '@nextui-org/react'
import { useState } from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { addNewNote } from '../../lib/server__acctions'
import Link from 'next/link'
import { useAuth } from '@clerk/nextjs'

import('./markdown.css')

export default function NotesEditor({ searchParams }) {
  const { userId } = useAuth()
  const [edited, setEdited] = useState('# new note')

  const handleClick = () => {
    addNewNote(edited, searchParams.edit, userId)
  }

  return (
    <>
      {searchParams.edit && (
        <>
          <div className="absolute w-screen h-screen bg-black z-50 bg-opacity-40 flex justify-center items-center"></div>
          <div className="w-[70%] h-screen bg-white absolute z-50 p-10 flex flex-col items-center">
            {/* -> cambiar el titulo por las rutas */}
            <h2 className="text-black">{searchParams.edit}</h2>
            {/* -> aqui va el editor de marckdown */}
            <div className="w-full h-full">
              <Markdown
                className="h-[67%] markdown__render"
                remarkPlugins={[remarkGfm]}
              >
                {edited}
              </Markdown>
              <Divider></Divider>
              <div className="h-[30%]">
                <p className="text-black text-xl font-bold">Editor</p>
                <textarea
                  type="text"
                  value={edited}
                  className="w-full h-full text-black mt-2 text-lg resize-none border"
                  placeholder="Add text"
                  onChange={(event) => {
                    setEdited(event.target.value)
                  }}
                ></textarea>
              </div>
            </div>
            <div className="w-full flex">
              <Button
                variant="shadow"
                color="success"
                onClick={handleClick}
                className="w-[50%] mr-2"
              >
                Save
              </Button>
              <Button as={Link} href={'/'} color="danger" className="w-[50%]">
                Cancel
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  )
}

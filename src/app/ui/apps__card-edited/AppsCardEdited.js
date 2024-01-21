'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { deleteUserApps } from '../../lib/server__acctions'

export default function AppsCardEdited({ isEdited, element }) {
  const handleClick = () => {
    const parsedElement = JSON.parse(element)
    deleteUserApps(parsedElement._id, parsedElement.user)
  }

  return (
    <>
      {isEdited === 'true' && (
        <div className="flex flex-col w-full h-full absolute top-0 ">
          <div
            className="w-full h-[50%] bg-eror-bg top-0 z-30 border-x-3 border-t-3 border-red flex justify-center items-center rounded-t hover:bg-red duration-150 text-red hover:text-white cursor-pointer"
            onClick={handleClick}
          >
            <FontAwesomeIcon icon={faTrash} className="w-[80%] text-2xl " />
          </div>
          <div className="w-full h-[50%] bg-blur-bg top-0 z-30 border-x-3 border-b-3 border-[#484848] flex justify-center items-center rounded-b hover:bg-[#484848] hover:text-white duration-150 cursor-pointer">
            <FontAwesomeIcon icon={faPencil} className="w-[80%] text-2xl" />
          </div>
        </div>
      )}
    </>
  )
}

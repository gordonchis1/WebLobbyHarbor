'use server'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Chip,
  CircularProgress,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from '@nextui-org/react'
import AppsCard from '../apps__card/AppsCard'
import AppsAddApp from '../apps__add-app/AppsAddApp'
import { Suspense } from 'react'

// ! Agregar el add desde otro componente ya onClick no admite server side
// ! las cards son cache solo se revalidan al agregar un elemento
// ! https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://www.instagram.com&size=50 para recuperar el fav icon

export default async function FastApps() {
  return (
    <div className="h-screen z-5 w-screen flex flex-col items-center justify-center top-0 left-0 w-auto absolute">
      {/* hacer que este sea el contenedor del bento y de las apps para acomodar la app  */}
      <div className="flex flex-col max-w-[75%]">
        <div className="flex justify-between items-center w-full h-full">
          <Chip className="mb-2 text-xl font-bold">Apps </Chip>
          <Dropdown>
            <DropdownTrigger>
              <FontAwesomeIcon
                icon={faGear}
                className="mb-2 text-2xl font-bold cursor-pointer hover:rotate-90 transform-gpu duration-500"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Dynamic Actions">
              <DropdownItem>Edit</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className="flex  flex-wrap mb-2 w-full justify-center">
          <Suspense fallback={<CircularProgress aria-label="Loading..." />}>
            <AppsCard />
          </Suspense>
          <AppsAddApp />
        </div>
      </div>
    </div>
  )
}

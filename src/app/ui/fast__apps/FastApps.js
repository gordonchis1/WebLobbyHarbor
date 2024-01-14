'use server'

import { faAdd, faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, Chip } from '@nextui-org/react'
import AppsCard from '../apps__card/AppsCard'

// ! Agregar el add desde otro componente ya onClick no admite server side
// ! https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://www.instagram.com&size=50 para recuperar el fav icon

export default async function FastApps() {
  return (
    <div className="h-auto z-5 h-auto w-auto absolute left-[50%] top-[26%] -translate-y-1/2 -translate-x-1/2">
      <div className="w-full h-auto flex justify-between items-center ">
        <Chip className="mb-2 text-xl font-bold">Apps </Chip>
        <FontAwesomeIcon
          icon={faGear}
          className="mb-2 text-2xl font-bold cursor-pointer hover:rotate-90 transform-gpu duration-500"
        />
      </div>
      <div className="flex px-4">
        <AppsCard name={'instagram'} url={'http://www.instagram.com'} />
        <Card
          radius="sm"
          className="border-none w-fit bg-transparent p-3 flex justify-center items-center bg-blur-bg cursor-pointer"
        >
          <FontAwesomeIcon icon={faAdd} className="text-3xl" />
          <p className="font-semibold text-black ">Add</p>
        </Card>
      </div>
    </div>
  )
}

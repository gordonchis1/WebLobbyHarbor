'use server'
import { Chip, CircularProgress } from '@nextui-org/react'
import AppsCard from '../apps__card/AppsCard'
import AppsAddApp from '../apps__add-app/AppsAddApp'
import { Suspense } from 'react'
import AppsSettingsDropdown from '../apps__settings-dropdown/AppsSettingsDropdown'
import AppsEditedConfirm from '../apps__edited-confirm/AppsEditedConfirm'

// ! Agregar el add desde otro componente ya onClick no admite server side
// ! las cards son cache solo se revalidan al agregar un elemento
// ! https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://www.instagram.com&size=50 para recuperar el fav icon

export default async function FastApps({ searchParams }) {
  return (
    <div className="h-screen z-5 w-screen flex flex-col items-center justify-center top-0 left-0 w-auto absolute">
      {/* hacer que este sea el contenedor del bento y de las apps para acomodar la app  */}
      <div className="flex flex-col max-w-[75%]">
        <div className="flex justify-between items-center w-full h-full">
          <Chip className="mb-2 text-xl font-bold">Apps </Chip>
          <AppsSettingsDropdown
            searchParams={searchParams}
          ></AppsSettingsDropdown>
        </div>
        <div className="flex  flex-wrap mb-2 w-full justify-center">
          <Suspense fallback={<CircularProgress aria-label="Loading..." />}>
            <AppsCard searchParams={searchParams} />
          </Suspense>
          <AppsAddApp />
        </div>
        <AppsEditedConfirm searchParams={searchParams} />
      </div>
    </div>
  )
}

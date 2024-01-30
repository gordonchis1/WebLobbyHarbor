'use server'
import { Chip, CircularProgress } from '@nextui-org/react'
import AppsCard from '../apps__card/AppsCard'
import AppsAddApp from '../apps__add-app/AppsAddApp'
import { Suspense } from 'react'
import AppsEditedConfirm from '../apps__edited-confirm/AppsEditedConfirm'
import dynamic from 'next/dynamic'

const AppsSettingsDropdown = dynamic(
  () => import('../apps__settings-dropdown/AppsSettingsDropdown')
)

export default async function FastApps({ searchParams }) {
  return (
    <>
      <div className="flex flex-col max-w-[100%] mb-11">
        <div className="flex justify-between items-center w-full h-auto">
          <Chip className="mb-2 text-xl font-bold">Apps </Chip>
          <AppsSettingsDropdown
            searchParams={searchParams}
          ></AppsSettingsDropdown>
        </div>
        <div className="flex mb-2 w-full justify-center overflow-x-auto overflow-y-hidden h-fit">
          <Suspense fallback={<CircularProgress aria-label="Loading..." />}>
            <AppsCard searchParams={searchParams} />
          </Suspense>
          <AppsAddApp />
        </div>
        <AppsEditedConfirm searchParams={searchParams} />
      </div>
    </>
  )
}

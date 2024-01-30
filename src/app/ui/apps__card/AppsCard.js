'use server'

import Link from 'next/link'
import { Card, Image } from '@nextui-org/react'
import { getUserApps } from '../../lib/server__acctions'
import AppsCardEdited from '../apps__card-edited/AppsCardEdited'

export default async function AppsCard({ searchParams }) {
  const isEdited = searchParams?.editApps?.toString()
  const apps = await getUserApps()

  return (
    <>
      {apps?.props?.apps?.map((element, index) => {
        return (
          <Card
            key={element._id}
            href={isEdited === 'true' ? '' : element.url}
            as={isEdited === 'true' ? '' : Link}
            radius="sm"
            className={
              'border-none w-fit px-3 py-1 flex justify-center items-center bg-blur-bg mr-3 max-w-[94px] min-w-[94px] mt-2'
            }
          >
            <AppsCardEdited
              isEdited={isEdited}
              element={JSON.stringify(element)}
            />
            <Image
              alt="App logo"
              isZoomed
              className="object-cover"
              height={50}
              src={`https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${element.url}&size=50`}
              width={50}
            />
            <p className="font-semibold text-black mt-1">{element.name}</p>
          </Card>
        )
      })}
    </>
  )
}

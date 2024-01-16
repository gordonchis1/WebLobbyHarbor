import Link from 'next/link'
import { Card, Image } from '@nextui-org/react'
import { getUserApps } from '../../lib/server__acctions'

export default async function AppsCard() {
  const apps = await getUserApps()

  return (
    <>
      {apps?.map((element) => {
        return (
          <Card
            key={element._id}
            href={element.url}
            as={Link}
            radius="sm"
            className="border-none w-fit bg-transparent px-3 py-1 flex justify-center items-center bg-blur-bg mr-3 max-w-[94px] mt-2"
          >
            <Image
              alt="App logo"
              isZoomed
              className="object-cover"
              height={70}
              src={`https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${element.url}&size=50`}
              width={70}
            />
            <p className="font-semibold text-black mt-1">{element.name}</p>
          </Card>
        )
      })}
    </>
  )
}

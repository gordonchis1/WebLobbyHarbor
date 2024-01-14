import Link from 'next/link'
import { Card, Image } from '@nextui-org/react'

export default function AppsCard({ url, name }) {
  const nombreUrl = url.match(/https?:\/\/(?:www\.)?([^/.]+)/)[1]

  return (
    <Card
      href={url}
      as={Link}
      radius="sm"
      className="border-none w-fit bg-transparent p-3 flex justify-center items-center bg-blur-bg mr-3"
    >
      <Image
        alt="App logo"
        isZoomed
        className="object-cover"
        height={70}
        src={`https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${url}&size=50`}
        width={70}
      />
      <p className="font-semibold text-black ">{nombreUrl}</p>
    </Card>
  )
}

import Link from 'next/link'
import { Image } from '@nextui-org/react'

export default function SuggestedSpotifyCover({ href, src, title }) {
  return (
    <Link href={href}>
      <Image isBlurred width={140} src={src} className="w-full h-auto"></Image>
      <p className="overflow-hidden w-full h-auto mt-1 text-base text-ellipsis overflow-hidden  max-h-14">
        {title}
      </p>
    </Link>
  )
}

import FastApps from '../fast__apps/FastApps'
import { Suspense } from 'react'
import Bento from '../bento/Bento'
import { BentoSkeleton } from '../Skeletons/Skeletons'

export default function Content({ searchParams }) {
  return (
    <div className="flex flex-col h-auto w-[75vw] justify-center items-center">
      <FastApps searchParams={searchParams} />
      <Suspense fallback={<BentoSkeleton />}>
        <Bento></Bento>
      </Suspense>
    </div>
  )
}

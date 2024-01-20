import { Skeleton } from '@nextui-org/react'

export const BentoSkeleton = () => {
  return (
    <Skeleton
      isLoaded={false}
      className="w-[55vw] h-[60vh] rounded grid auto-rows-[192px] grid-cols-3 gap-4 z-[5]"
    ></Skeleton>
  )
}

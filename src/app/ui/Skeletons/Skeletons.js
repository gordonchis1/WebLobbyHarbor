import { Skeleton } from '@nextui-org/react'

export const BentoSkeleton = () => {
  return (
    <div className="w-[55vw] h-[60vh] rounded grid auto-rows-[192px] grid-cols-3 gap-4 z-[5]">
      <Skeleton
        className="row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 flex justify-center items-center text-2xl text-black"
        isLoaded={false}
      ></Skeleton>
      <Skeleton
        className="row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 flex justify-center items-center text-2xl text-black"
        isLoaded={false}
      ></Skeleton>
      <Skeleton
        className="row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 flex justify-center items-center text-2xl text-black"
        isLoaded={false}
      ></Skeleton>
      <Skeleton
        className="row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 flex justify-center items-center text-2xl text-black col-span-2"
        isLoaded={false}
      ></Skeleton>
      <Skeleton
        className="rounded-xl border-2 border-slate-400/10 bg-[#37003db1] p-4 dark:bg-neutral-900 text-2xl text-black row-span-2 col-span-1"
        isLoaded={false}
      ></Skeleton>
      <Skeleton
        className="rounded-xl border-2 border-slate-400/10 bg-gradient-to-br from-[#17188dc0] to-[#8515c3c0] p-4 dark:bg-neutral-900 text-2xl text-black row-span-2 col-span-2"
        isLoaded={false}
      ></Skeleton>
      <Skeleton
        className="row-span-1 rounded-xl border-2 border-slate-400/10 bg-gradient-to-r from-blue-200/[.70] to-cyan-200/[.70] p-4 dark:bg-neutral-900 flex justify-center items-center text-2xl text-black"
        isLoaded={false}
      ></Skeleton>
    </div>
  )
}

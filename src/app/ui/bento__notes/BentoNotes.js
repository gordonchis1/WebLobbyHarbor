'use server'
import dynamic from 'next/dynamic'

const BentoNotesAddDropdown = dynamic(
  () => import('../bento__notes-add-dropdown/BentoNotesAddDropdown')
)

export default async function BentoNotes() {
  return (
    <div className="row-span-2 overflow-hidden rounded-xl border-2 border-slate-400/10 bg-blur-bg p-4 dark:bg-neutral-900 flex justify-center items-center text-black dark:text-white">
      <div className="flex flex-col w-full h-full">
        <div className="w-full flex items-center justify-between">
          <h3 className="text-2xl">Notes & Links</h3>
          <BentoNotesAddDropdown></BentoNotesAddDropdown>
        </div>
        <div className="w-full h-full rounded px-1 py-2"></div>
      </div>
    </div>
  )
}

'use client'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

export default function AppsEditedConfirm({ searchParams }) {
  const route = useRouter()
  const handleClick = () => {
    const params = new URLSearchParams(searchParams)
    params.delete('editApps')
    route.replace(`/?${params.toString()}`)
  }

  return (
    <>
      {searchParams.editApps === 'true' && (
        <Button
          className="w-full h-[100px] rounded bg-customGreen flex justify-center items-center cursor-pointer"
          onClick={handleClick}
        >
          Confirm
        </Button>
      )}
    </>
  )
}

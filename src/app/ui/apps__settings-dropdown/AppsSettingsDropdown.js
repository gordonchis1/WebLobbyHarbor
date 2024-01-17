'use client'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from '@nextui-org/react'
import { faGear, faPencil } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/navigation'

export default function AppsSettingsDropDown({ searchParams }) {
  const route = useRouter()

  const handleEdit = () => {
    const params = new URLSearchParams(searchParams)
    if (!params.get('editApps')) {
      params.set('editApps', 'true')
    } else {
      params.delete('editApps')
    }
    route.replace(`/?${params.toString()}`)
  }

  return (
    <Dropdown>
      <DropdownTrigger>
        <FontAwesomeIcon
          icon={faGear}
          className="mb-2 text-2xl font-bold cursor-pointer hover:rotate-90 transform-gpu duration-500"
        />
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Static Actions"
        className="text-black"
        variant="faded"
      >
        <DropdownItem textValue={'Edit'} onClick={handleEdit}>
          <FontAwesomeIcon icon={faPencil} className="mr-2" />
          Edit
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

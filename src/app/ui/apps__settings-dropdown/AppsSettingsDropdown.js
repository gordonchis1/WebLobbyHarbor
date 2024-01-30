'use client'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button
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
        <Button isIconOnly>
          <FontAwesomeIcon icon={faGear} className="text-2xl font-bold" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Static Actions"
        className="text-black dark:text-white"
        variant="faded"
      >
        <DropdownItem textValue="Edit" onClick={handleEdit}>
          <FontAwesomeIcon icon={faPencil} className="mr-2" />
          Edit
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

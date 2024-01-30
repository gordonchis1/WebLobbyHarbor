'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAdd,
  faFolder,
  faLink,
  faNoteSticky
} from '@fortawesome/free-solid-svg-icons'
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger
} from '@nextui-org/react'
import { useRouter } from 'next/navigation'

export default function BentoNotesAddDropdown() {
  const route = useRouter()

  const items = [
    {
      key: 'note',
      text: 'New Note',
      icon: faNoteSticky
    },
    { key: 'link', text: 'New Link', icon: faLink },
    { key: 'folder', text: 'New Folder', icon: faFolder }
  ]

  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Button isIconOnly>
            <FontAwesomeIcon
              icon={faAdd}
              className="w-[1.5rem] h-[1.5rem] cursor-pointer"
            ></FontAwesomeIcon>
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Dynamic Actions"
          className="text-black"
          items={items}
          onAction={(key) => route.replace(`?newitem=${key}`)}
        >
          {(item) => (
            <DropdownItem key={item.key} textValue={item.text}>
              <div className="flex w-full justify-between items-center">
                <p>{item.text}</p>
                <FontAwesomeIcon icon={item.icon}></FontAwesomeIcon>
              </div>
            </DropdownItem>
          )}
        </DropdownMenu>
      </Dropdown>
    </>
  )
}

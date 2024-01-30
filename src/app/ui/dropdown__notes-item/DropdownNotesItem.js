import { DropdownItem } from '@nextui-org/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function DropdownNotesItem({ text, icon }) {
  return (
    <DropdownItem key={text} textValue={text}>
      <div className="flex justify-between items-center">
        {text}
        <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
      </div>
    </DropdownItem>
  )
}

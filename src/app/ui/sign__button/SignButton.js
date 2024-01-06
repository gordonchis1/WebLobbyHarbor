import { Button } from '@nextui-org/react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SignButton({ className, icon, href, variant, text }) {
  return (
    <Button
      as={Link}
      href={href}
      className={className}
      radius="sm"
      variant={variant}
    >
      <FontAwesomeIcon icon={icon} />
      {text}
    </Button>
  )
}

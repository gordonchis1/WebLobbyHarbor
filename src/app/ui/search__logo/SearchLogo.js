import Image from 'next/image'
import { KEYS } from '../../lib/constants'
import('./searchlogo.css')
//! arreglar la condicion

export default function SearchLogo({ searchParams }) {
  return (
    <div className="form__container-img">
      <Image
        src={
          KEYS[searchParams.get('key')?.toString()]
            ? KEYS[searchParams.get('key')?.toString()]?.img
            : KEYS['!g'].img
        }
        width={35}
        height={35}
        className="logo__img"
        alt="logo"
        priority={true}
      />
    </div>
  )
}

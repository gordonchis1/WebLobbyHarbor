import Image from 'next/image'
import { KEYS } from '../../lib/constants'
//! arreglar la condicion

export default function SearchLogo({ searchParams }) {
  return (
    <div className="bg-white h-full py-[5px] pr-[5px] pl-[10px] rounded-l-[30px]">
      <Image
        src={
          KEYS[searchParams.get('key')?.toString()]
            ? KEYS[searchParams.get('key')?.toString()]?.img
            : KEYS['!g'].img
        }
        width={35}
        height={35}
        className="object-contain "
        alt="logo"
        priority={true}
      />
    </div>
  )
}

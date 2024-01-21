import Image from 'next/image'
import { KEYS } from '../../lib/constants'
//! arreglar la condicion

export default function SearchLogo({ completeInput }) {
  return (
    <div className="bg-white h-full py-[5px] pr-[5px] pl-[10px] rounded-l-[30px]">
      <Image
        src={
          KEYS[completeInput?.key]
            ? KEYS[completeInput?.key]?.img
            : KEYS['!g'].img
        }
        width={35}
        height={35}
        className="object-contain w-[35px] h-[35px]"
        alt="logo"
        priority={true}
      />
    </div>
  )
}

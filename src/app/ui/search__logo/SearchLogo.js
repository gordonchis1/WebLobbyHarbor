import Image from 'next/image'
import { KEYS } from '../../lib/constants'

//! arreglar la condicion

export default function SearchLogo ({ searchParams }) {
  return (
    <div className='form__container-img'>
        <Image src={KEYS[searchParams.get('key')?.toString()] ? KEYS[searchParams.get('key')?.toString()]?.img : KEYS['!g'].img} width={'35px'} height={'35px'} className='logo__img' alt='logo' priority={true}/>
    </div>
  )
}

'use client'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import googleLogo from '@/../public/google_logo.png'
import youtubeLogo from '@/../public/youtube_logo.png'
import Image from 'next/image'

import('./search.css')

export default function Search () {
  const route = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const keys = {
    '!g': {
      route: 'https://www.google.com.mx/search?q=',
      img: googleLogo
    },
    '!y': {
      route: 'https://www.youtube.com/results?search_query=',
      img: youtubeLogo
    }
  }

  const keysOfKeys = Object.keys(keys)

  const handleSearch = (value) => {
    const params = new URLSearchParams(searchParams)
    const initKey = value.split(' ')

    if (keysOfKeys.includes(initKey[0])) {
      params.set('key', initKey[0])
    } else {
      params.delete('key')
    }

    if (value) {
      params.set('query', value)
    } else {
      params.delete('query')
    }

    route.replace(`${pathname}?${params.toString()}`)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const value = `${keys[searchParams.get('key')?.toString()] ? keys[searchParams.get('key')?.toString()]?.route : keys['!g'].route}${event.target[0].value}`

    route.push(value)
  }

  return (
        <form onSubmit={handleSubmit} className='flex'>
            <Image src={keys[searchParams.get('key')?.toString()] ? keys[searchParams.get('key')?.toString()]?.img : keys['!g'].img} width={'20px'} height={'20px'} className='logo__img' alt='logo' priority={true}/>
            <input className="form__input-search" type="text" placeholder="search" onChange={event => handleSearch(event.target.value)} defaultValue={searchParams.get('query')?.toString()}>
            </input>
        </form>
  )
}

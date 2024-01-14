import { useRouter } from 'next/navigation'
import { KEYS } from '../../lib/constants'
import Image from 'next/image'
import('./keysuggestion.css')

export default function KeySuggestion({ results, completeInput, setInput }) {
  const router = useRouter()

  const handleClick = (element) => (event) => {
    event.preventDefault()
    const params = new URLSearchParams()
    params.set('key', element + '')
    setInput({ ...completeInput, input: element + ' ' })
    router.push(`?${params}`)
  }

  return (
    <div className="w-full h-auto mb-3 flex">
      {results.map((element) => {
        return (
          <li
            key={element}
            className="suggested__result-container"
            style={{ width: '100%', height: '100%' }}
          >
            <button
              className={'suggested__result-btn'}
              onClick={handleClick(element)}
            >
              <Image
                src={KEYS[element].img.src}
                width={25}
                height={25}
                className="suggested__img-logo"
                alt="suggestion logo"
              ></Image>
              <p>{element}</p>
            </button>
          </li>
        )
      })}
    </div>
  )
}

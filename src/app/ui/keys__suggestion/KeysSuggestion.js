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
    <ul className="w-full h-auto mb-3 flex flex-wrap flex-row ">
      {results.map((element) => {
        return (
          <li
            key={element}
            className="cursor-pointer flex justify-center shrink grow m-w-[98px] mt-[2px] items-center flex-col ml-[5px] relative rounded p-[5px] overflow-hidden bg-[#58585852] suggested__result-container"
          >
            <button
              className={'suggested__result-btn'}
              onClick={handleClick(element)}
            >
              <Image
                src={KEYS[element].img.src}
                width={25}
                height={25}
                className="w-[25px] h-[25px] object-contain"
                alt="Suggestion logo"
              ></Image>
              <p>{element}</p>
            </button>
          </li>
        )
      })}
    </ul>
  )
}

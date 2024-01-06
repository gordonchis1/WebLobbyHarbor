import { KEYS } from '../../lib/constants'
import('./keysuggestion.css')

export default function KeySuggestion({ results, completeInput, setInput }) {
  const handleClick = (element) => (event) => {
    event.preventDefault()
    setInput({ ...completeInput, input: element + ' ' })
  }

  return (
    <>
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
              <img
                src={KEYS[element].img.src}
                className="suggested__img-logo"
              ></img>
              <p>{element}</p>
            </button>
          </li>
        )
      })}
    </>
  )
}

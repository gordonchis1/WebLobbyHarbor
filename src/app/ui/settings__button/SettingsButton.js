import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faGear } from '@fortawesome/free-solid-svg-icons'

export default function SettingsButton({ active, setActive }) {
  const handleClick = (event) => {
    setActive(!active)
  }

  return (
    <>
      {!active ? (
        <FontAwesomeIcon
          icon={faGear}
          className="text-3xl cursor-pointer mt-5 mr-5 hover:rotate-90 transform-gpu duration-500"
          onClick={handleClick}
        />
      ) : (
        <FontAwesomeIcon
          icon={faClose}
          className="text-3xl cursor-pointer mt-2 mr-2 hover:text-red-800 duration-100"
          onClick={handleClick}
        />
      )}
    </>
  )
}

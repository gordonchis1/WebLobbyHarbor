import SignButton from '../sign__button/SignButton'
import { faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons'

export default function AuthSignButtons() {
  return (
    <div className="flex">
      <SignButton
        className={'bg-emerald-500 mr-3'}
        icon={faRightFromBracket}
        href={'/sign-up'}
        text={'Sign up'}
      />
      <SignButton
        radius="sm"
        variant="flat"
        href="/sign-in"
        icon={faUser}
        text={'Sign in'}
      ></SignButton>
    </div>
  )
}

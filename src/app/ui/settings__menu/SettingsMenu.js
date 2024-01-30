import SettingsBlur from '../settings__blur/SettingsBlur'
import SettingsConnections from '../settings__connections/SettingsConnections'

export default function SettingsMenu() {
  return (
    <div
      className={
        'w-96 h-screen bg-white rounded-s p-4 flex flex-col dark:bg-dark-regular'
      }
    >
      <SettingsBlur />
      <SettingsConnections />
    </div>
  )
}

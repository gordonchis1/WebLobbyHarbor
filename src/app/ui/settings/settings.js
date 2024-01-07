'use client'
import { useEffect, useState } from 'react'
import SettingsButton from '../settings__button/SettingsButton'
import SettingsBlur from '../settings__blur/SettingsBlur'
import SettingsConnections from '../settings__connections/SettingsConnections'

//! componetizar
//! arreglar la forma de conservar las settings

// ? agregar las miniaturas de los background

export default function Settings() {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const config = JSON.parse(window.localStorage.getItem('config'))
    if (config) {
      document.documentElement.style.setProperty(
        '--background-blur',
        `${config.blur}px`
      )
    }
  }, [])

  return (
    <>
      <SettingsButton active={active} setActive={setActive} />
      {active ? (
        <div className={'w-96 h-screen bg-white rounded-s p-4 flex flex-col'}>
          <SettingsBlur />
          <SettingsConnections />
        </div>
      ) : (
        ''
      )}
    </>
  )
}

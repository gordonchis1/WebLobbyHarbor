'use client'
import { useEffect, useState } from 'react'
import SettingsButton from '../settings__button/SettingsButton'
import dynamic from 'next/dynamic'

//! componetizar
//! arreglar la forma de conservar las settings

// ? agregar las miniaturas de los background

const SettingsMenu = dynamic(() => import('../settings__menu/SettingsMenu'))

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
      {active ? <SettingsMenu /> : ''}
    </>
  )
}

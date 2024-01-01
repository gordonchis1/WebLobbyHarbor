'use client'

import { useEffect, useState } from 'react'
import { Slider } from '@nextui-org/slider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faGear } from '@fortawesome/free-solid-svg-icons'
import('./settings.css')

//! componetizar
//! arreglar la forma de conservar las settings

// ? agregar las miniaturas de los background

export default function Settings () {
  const [active, setActive] = useState(false)

  const handleClick = (event) => {
    setActive(!active)
  }

  const handleChangeSliderBlur = (event) => {
    document.documentElement.style.setProperty('--background-blur', `${event}px`)
    const config = {
      blur: event
    }
    window.localStorage.setItem('config', JSON.stringify(config))
  }

  useEffect(() => {
    const config = JSON.parse(window.localStorage.getItem('config'))
    if (config) { document.documentElement.style.setProperty('--background-blur', `${config.blur}px`) }
  }, [])

  return (
    <>
        {!active
          ? <FontAwesomeIcon icon={faGear} className='settings__icon setting-icon' onClick={handleClick}/>
          : <FontAwesomeIcon icon={faClose} className='settings__close-icon setting-icon' onClick={handleClick}/>}
        { active
          ? <div className={'settings__container'}>
                <div className='settings__blur-slider-wpp'>
                    <Slider
                        label="Blur"
                        step={1}
                        maxValue={30}
                        minValue={0}
                        defaultValue={JSON.parse(window.localStorage.getItem('config'))?.blur || 0}
                        className="slider"
                        color='foreground'
                        onChange={handleChangeSliderBlur}
                    />
                </div>
            </div>
          : ''}
    </>
  )
}

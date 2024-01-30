import { Slider } from '@nextui-org/slider'

export default function SettingsBlur() {
  const handleChangeSliderBlur = (event) => {
    document.documentElement.style.setProperty(
      '--background-blur',
      `${event}px`
    )
    const config = {
      blur: event
    }
    window.localStorage.setItem('config', JSON.stringify(config))
  }

  return (
    <div className="w-full h-auto">
      <Slider
        label="Blur"
        step={1}
        maxValue={15}
        minValue={0}
        defaultValue={
          JSON.parse(window.localStorage.getItem('config'))?.blur || 0
        }
        className="w-full h-auto text-slate-950 dark:text-white"
        color="foreground"
        onChange={handleChangeSliderBlur}
      />
    </div>
  )
}

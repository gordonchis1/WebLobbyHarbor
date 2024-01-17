import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { MyInput } from '../nextui__custom/NextUiCustom'
import { Chip, Image, Button } from '@nextui-org/react'
import { createApp } from '../../lib/server__acctions'
import { useFormState } from 'react-dom'
import { useEffect } from 'react'

export default function AppsFormAdd({ setIsActive, setValue, value }) {
  const regex = /^(ftp|http|https):\/\/[^ "]+$/
  const [state, formAction] = useFormState(createApp, {
    message: '',
    error: undefined,
    state: false
  })

  useEffect(() => {
    if (state.state === true) {
      setTimeout(() => {
        setIsActive(false)
      }, 700)
    }
  }, [state])

  return (
    <div className="absolute w-[45vw]  h-[40vh] bg-blur-bg z-20 rounded left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 p-2  backdrop-blur-md flex flex-col justify-center items-center">
      <h2 className="text-2xl text-black font-bold">Create new App</h2>
      {state.error && (
        <div
          className={
            'w-[70%] h-[20%] border-4 border-red rounded flex flex-col justify-center items-center text-red bg-eror-bg mt-3'
          }
        >
          <p className={'font-bold text-2xl'}>Error</p>
          <p>{state.error}</p>
        </div>
      )}
      {state.message && (
        <div
          className={
            'w-[70%] h-[20%] border-4 border-customGreen rounded flex flex-col justify-center items-center text-customGreen bg-succes-bg mt-3'
          }
        >
          <p className={'font-bold text-2xl'}>Succes</p>
          <p>{state.message}</p>
        </div>
      )}
      <button
        className=" absolute right-0 top-0 m-2"
        onClick={() => setIsActive(false)}
      >
        <FontAwesomeIcon icon={faClose} className="text-4xl text-red" />
      </button>
      <div className="w-[90%] h-[40%] flex flex-col justify-between">
        <form className="flex w-full justify-between mt-4" action={formAction}>
          <MyInput
            onChange={(event) => {
              if (regex.test(event.target.value)) {
                const urlObj = new URL(event.target.value)

                setValue({
                  ...value,
                  url: event.target.value,
                  nameFromUrl: urlObj.hostname.split('.', 1)
                })
              } else {
                setValue({
                  ...value,
                  url: event.target.value
                })
              }
            }}
            name="url"
            color="white"
            variant="bordered"
            labelPlacement={'outside'}
            label="URL"
            value={value?.url || ''}
            className="mb-4 mr-4"
          />
          <MyInput
            color="white"
            labelPlacement={'outside'}
            label="Name"
            placeholder={value.nameFromUrl || ''}
            onChange={(event) =>
              setValue({ ...value, name: event.target.value })
            }
            value={value?.name || value.nameFromUrl || ''}
            name="name"
          />
          <div className="mt-5 ml-20">
            <Chip className="mb-1">Icono</Chip>
            <div className="bg-slate-400 p-3 rounded">
              <Image
                width={130}
                height={130}
                alt="NextUI hero Image with delay"
                src={
                  regex.test(value.url)
                    ? `https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${value.url}&size=50`
                    : ''
                }
              ></Image>
            </div>
            <p className="text-black">{value.name || value.nameFromUrl}</p>
          </div>
          <Button
            className="absolute bottom-0 mb-20"
            color="success"
            size="lg"
            type="submit"
          >
            Save
          </Button>
        </form>
      </div>
    </div>
  )
}

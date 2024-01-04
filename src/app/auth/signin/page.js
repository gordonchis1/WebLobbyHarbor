'use client'

import AuthInput from '../../ui/auth__input/AuthInput'
import AuthForm from '../../ui/auth__form/AuthForm'

export default function Page () {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <>
      <h1 className="font-bold text-2xl text-slate-950">JOIN TO BROWSE</h1>
      <AuthForm onSubmit={handleSubmit}>
        <AuthInput label="Username" type="text"/>
        <AuthInput label="Password" type="password"/>
        <button className="w-full py-1.5 bg-black rounded-md mt-7" >Sign In</button>
      </AuthForm>
    </>
  )
}

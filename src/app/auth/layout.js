import('./authglobal.css')

export default function LoginLayout ({ children }) {
  return (
    <div className="login__container">
      <div className='login__wrapper'>
         {children}
         <footer></footer>
      </div>
    </div>
  )
}

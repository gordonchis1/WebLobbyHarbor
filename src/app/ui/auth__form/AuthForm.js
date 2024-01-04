export default function AuthForm ({ children, onSubmit }) {
  return (
    <form className="flex flex-col mt-7" onSubmit={onSubmit}>
        {children}
    </form>
  )
}

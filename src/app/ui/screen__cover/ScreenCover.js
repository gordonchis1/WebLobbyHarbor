export default function ScreenCover({ setInput, completeInput }) {
  return completeInput.status ? (
    <div
      className="w-screen h-screen inset-0 z-50 absolute"
      onClick={() => {
        console.log('click')
        setInput({ ...completeInput, status: false })
      }}
    ></div>
  ) : (
    ''
  )
}

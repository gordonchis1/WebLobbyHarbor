export default function ScreenCover({ setInput, completeInput }) {
  return completeInput.status ? (
    <div
      className="w-screen h-screen inset-0 z-20 absolute"
      onClick={() => {
        setInput({ ...completeInput, status: false })
      }}
    ></div>
  ) : (
    ''
  )
}

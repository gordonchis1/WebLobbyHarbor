export default function ScreenCover({ setInput, completeInput }) {
  return completeInput.status ? (
    <div
      className="w-screen h-screen inset-0 z-20 fixed bottom-0 top-0"
      onClick={() => {
        setInput({ ...completeInput, status: false })
      }}
    ></div>
  ) : (
    ''
  )
}

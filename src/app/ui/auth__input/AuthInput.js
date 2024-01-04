export default function AuthInput ({
  label,
  placeholder,
  type
}) {
  return (
    <>
        <label className="text-slate-950 mb-.2">{label}</label>
        <input type={type} className=" pr-20 pl-4 py-1.5 rounded-md outline-none text-slate-950 mb-3" placeholder={label}></input>
    </>
  )
}

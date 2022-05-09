import 'components/Search/styles.scss'

export default function Search({placeholder}: {placeholder?:string}) {
  return (
    <input className="search" placeholder={placeholder}></input>
  )
}

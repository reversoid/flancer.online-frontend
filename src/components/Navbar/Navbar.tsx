import 'components/Navbar/styles.scss'
import Search from 'components/Search/Search'

export default function Navbar() {
  return (
    <nav className='navbar container'>
        <div className="tabs fw-700">
            <button className="tabs__tab btn bg-main">Заказы</button>
            <button className="tabs__tab btn bg-black color-light">Чаты</button>
        </div>
        <div className="navbar__search">
            <Search/>
        </div>
    </nav>
  )
}

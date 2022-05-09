import 'components/Navbar/styles.scss'
import Search from 'components/Search/Search'
import { Link } from 'react-router-dom'
import { useSearchLayout, useTabsLayout } from 'utils/navbarHooks'

export default function Navbar() {
  return (
    <nav className='navbar container'>
      <div className="tabs fw-700">
        <Link to={'orders'} className={"tabs__tab btn " + useTabsLayout('/orders')}>
          Заказы
        </Link>
        <Link to={'messages'} className={"tabs__tab btn " + useTabsLayout('/messages')}>
          Чаты
        </Link>
      </div>
      <div className="navbar__search">
        <Search placeholder={useSearchLayout()}/>
      </div>
    </nav>
  )
}

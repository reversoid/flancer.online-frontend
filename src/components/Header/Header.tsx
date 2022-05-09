import 'components/Header/styles.scss'
import Role from 'components/HeaderRole/Role'

export default function Header() {
  return (
    <header className="header container bg-dark color-light fw-700">
        <div className="logo">
          <img src={require("./img/LEGO_logo.svg.png")} alt="Logo" className="logo__img"/>
        </div>
        <div className="menu">
          <Role/>
          <div className="profile">
            <div className="profile__image" />
            <span className="profile__name">Георгий</span>
          </div>
        </div>
      </header>
  )
}


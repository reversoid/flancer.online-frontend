import 'pages/ProfilePage/styles.scss'

export default function ProfilePage() {
  return (
    <div className='profile container color-light'>
      <div className="profile__header">
        <div className="profile__image"></div>
        <div className="profile__info">
          <div>
            <h1 className="profile__name fw-700">Георгий Кобунов</h1>
            <p className="profile__description fw-500 p">
              Привет! Я занимаюсь веб-разработкой!<br/>
              Я умею писать сайты на Angular, React.<br/>
              Также могу реализовать полноценное клиент-серверное REST приложение, <br/>
              используя Nest.js и вышеперечисленные фреймворки.
            </p>
          </div>
          <div className="profile__stats fw-600">
            <div className='profile__stat-group'>
              <div className="profile__stat mr-2">
                <span>Рейтинг:&nbsp;</span><span className='color-main'>4.7</span>
              </div>
              <div className="profile__stat">
                <span>Отзывов:&nbsp;</span><span className='color-main'>100</span>
              </div>
            </div>
            <div className="profile__stat">
              <span>Выполнено заказов:&nbsp;</span><span className='color-main'>10</span>
            </div>
          </div>
        </div>
      </div>
      <div className="projects">
        <h2 className="projects__title fw-600">Портфолио</h2>
        <div className="projects__grid">
          <div className="project"></div>
          <div className="project"></div>
          <div className="project"></div>
        </div>
      </div>
    </div>
  )
}

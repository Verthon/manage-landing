
//import {Logo as ReactComponent} from '../public/logo.svg'

export default function Navigation({links}) {
  const renderNavigationItems = () => {
    if(links.length > 0) {
    return links.map((link) => (<li key={link} className="navigation__item"><a href="#" className="navigation__link">{link}</a></li>))
    }
  }
  return (
    <nav className="navigation">
      <img className="navigation__logo" src="/logo.svg" alt=""/>
      <button type="button" className="navigation__button"><span className="line"></span><span className="line"></span><span className="line"></span></button>
      <ul className="navigation__list">
        {renderNavigationItems()}
      </ul>
    </nav>
  )
} 
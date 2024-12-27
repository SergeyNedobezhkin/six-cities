import { Link } from "react-router-dom"
import Logo from "../../components/Logo/Logo"
import css from "../NotFound/NotFound.module.scss"


function NotFound() {
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className={css.wrapper}>
            <Logo />
            <h1>
              404 Not Found
            </h1>
            <Link to={"/"}>
              Вернутся на главную
            </Link>
          </div>
        </div>
      </header >
    </div >
  )
}

export default NotFound

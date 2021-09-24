import * as React from "react"
import { Link } from "gatsby"
import logo from "../../static/assets/logo-full.svg"

const Header = () => {
    const linkClasses = "text-red-500 hover:text-red-800"

    return (
        <header className="rl-header container mx-auto mb-6 mt-8 max-w-3xl flex">
          <a className="mr-6" href="/">
            <img src={logo} alt="BOSS Wireless" className="h-10" />
          </a>
          <nav className="nav flex-grow flex items-center justify-end">
            <ul className="flex">
              <li className="ml-6">
                <Link className={linkClasses} to="/rates">
                  RATES
                </Link>
              </li>
              <li className="ml-6">
                <Link className={linkClasses} to="/coverage">
                  COVERAGE
                </Link>
              </li>
              <li className="ml-6">
                <Link className={linkClasses} to="/activation">
                  JOIN US
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      )
};

export default Header;
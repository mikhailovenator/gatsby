import * as React from "react"
import { Link } from "gatsby"
import logo from "../../static/assets/logo-full.svg"

const Header = () => {
    const linkClasses = "text-red-500 hover:text-red-800"

    return (
        <header className="px-4 py-3 max-w-2xl mx-auto lg:max-w-6xl bg-primary flex justify-between">
          <div className="flex">
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
          </div>
          <nav>
            <ul className="flex">
              <li className="ml-6">
                <Link className={linkClasses} to="/activation">
                  LOG IN
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      )
};

export default Header;
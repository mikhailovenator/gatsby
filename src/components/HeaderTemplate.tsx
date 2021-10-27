import * as React from "react"
import { Link } from "gatsby"

type MenuItem = {
  name: string;
  link: string;
}

type HeaderTemplateProps = { 
  logo: {
    image: object | string;
    description: string;
  };
  menuItems: MenuItem[]; 
};

const HeaderTemplate = ({logo, menuItems}: HeaderTemplateProps) => {
    const linkClasses = "text-red-500 hover:text-red-800"

    return (
        <header className="px-4 py-3 max-w-2xl mx-auto lg:max-w-6xl bg-primary flex justify-between">
          <div className="flex">
            <a className="mr-6" href="/">
              <img src={!!logo.image.childImageSharp ? logo.image.childImageSharp.fluid.src : logo.image} alt={logo.description} className="h-10" />
            </a>
            <nav className="nav flex-grow flex items-center justify-end">
              <ul className="flex">
                {
                  menuItems.map(i => (
                    <li key={i.link} className="uppercase">
                      <Link className={linkClasses} to={i.link}>
                        {i.name}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </nav>
          </div>
          <nav>
            <ul className="flex">
            </ul>
          </nav>
        </header>
      )
};

export default HeaderTemplate;
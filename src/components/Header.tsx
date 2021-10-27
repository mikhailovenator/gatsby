import * as React from "react"
import HeaderTemplate from "./HeaderTemplate";
import { useLocalization } from "gatsby-theme-i18n"
import { useStaticHeaderQueryEs } from "../hooks/useStaticHeaderQueryEs";
import { useStaticHeaderQueryEn } from "../hooks/useStaticHeaderQueryEn";

const Header = () => {
  const { locale, config, defaultLang } = useLocalization()
  const data = locale === defaultLang ? useStaticHeaderQueryEn() : useStaticHeaderQueryEs();
  const frontmatter = data.allFile.edges[0].node.childMdx.frontmatter;

  return (
    <HeaderTemplate logo={frontmatter.logo} menuItems={frontmatter.menuItems} />
  )
};

export default Header;
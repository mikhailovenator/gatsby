import * as React from "react"
import { useLocalization } from "gatsby-theme-i18n"
import FooterTemplate from "./FooterTemplate";
import { useStaticFooterQueryEs } from "../hooks/useStaticFooterQueryEs";
import { useStaticFooterQueryEn } from "../hooks/useStaticFooterQueryEn";

const Footer = () => {
    const { locale, config, defaultLang } = useLocalization()
    const data = locale === defaultLang ? useStaticFooterQueryEn() : useStaticFooterQueryEs();
    
    return (
      <FooterTemplate copyright={data.allFile.edges[0].node.childMdx.frontmatter.copyright} />
    )
};

export default Footer;
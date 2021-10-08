import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useLocalization } from "gatsby-theme-i18n"

const Footer = () => {
    const { locale, config, defaultLang } = useLocalization()
    const loc = locale === defaultLang ? 'en' : 'es'
    const data = useStaticQuery(graphql`
    query MyQuery {
      en:allFile(
        filter: {sourceInstanceName: {eq: "pageDataEn"}, childMdx: {frontmatter: {contentKey: {eq: "footer"}}}}
      ) {
        edges {
          node {
            childMdx {
              frontmatter {
                copyright
              }
            }
          }
        }
      }
      es:allFile(
        filter: {sourceInstanceName: {eq: "pageDataEs"}, childMdx: {frontmatter: {contentKey: {eq: "footer"}}}}
      ) {
        edges {
          node {
            childMdx {
              frontmatter {
                copyright
              }
            }
          }
        }
      }
    }
    `)

    return (
        <footer className="text-center px-4 py-3 max-w-2xl mx-auto lg:max-w-6xl bg-primary">
            {data[loc].edges[0].node.childMdx.frontmatter.copyright}
        </footer>
    )
};

export default Footer;
import { useStaticQuery, graphql } from "gatsby"

export const useStaticFooterQueryEs = () => useStaticQuery(graphql`
query FooterQueryEs {
    allFile(
      filter: {sourceInstanceName: {eq: "pageData"}, locale: {eq: "es-us"}, childMdx: {frontmatter: {contentKey: {eq: "footer"}}}}
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
import { useStaticQuery, graphql } from "gatsby"

export const useStaticFooterQueryEn = () => useStaticQuery(graphql`
query FooterQueryEn {
    allFile(
      filter: {sourceInstanceName: {eq: "pageData"}, locale: {eq: "en-us"}, childMdx: {frontmatter: {contentKey: {eq: "footer"}}}}
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
import { useStaticQuery, graphql } from "gatsby"

export const useStaticHomeQueryEn = () => useStaticQuery(graphql`
query HomeQueryEn {
  allFile(
    filter: {sourceInstanceName: {eq: "pageData"}, locale: {eq: "en-us"}, childMdx: {frontmatter: {contentKey: {eq: "home"}}}}
  ) {
    edges {
      node {
        childMdx {
          frontmatter {
            heroImage {
              image {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH)
                }
              }
              description
            }
            disclaimer
          }
        }
      }
    }
  }
}
`)
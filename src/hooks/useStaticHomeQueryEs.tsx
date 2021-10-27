import { useStaticQuery, graphql } from "gatsby"

export const useStaticHomeQueryEs = () => useStaticQuery(graphql`
query HomeQueryEs {
  allFile(
    filter: {sourceInstanceName: {eq: "pageData"}, locale: {eq: "es-us"}, childMdx: {frontmatter: {contentKey: {eq: "home"}}}}
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
import { useStaticQuery, graphql } from "gatsby"

export const useStaticHeaderQueryEs = () => useStaticQuery(graphql`
query HeaderQueryEs {
  allFile(
    filter: {sourceInstanceName: {eq: "pageData"}, locale: {eq: "es-us"}, childMdx: {frontmatter: {contentKey: {eq: "header"}}}}
  ) {
    edges {
      node {
        childMdx {
          frontmatter {
            logo {
              image {
                childImageSharp {
                  fluid(maxWidth: 526, quality: 92) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              description
            }
            menuItems {
              link
              name
            }
          }
        }
      }
    }
  }
}
`)
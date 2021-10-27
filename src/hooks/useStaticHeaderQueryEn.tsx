import { useStaticQuery, graphql } from "gatsby"

export const useStaticHeaderQueryEn = () => useStaticQuery(graphql`
query HeaderQueryEn {
  allFile(
    filter: {sourceInstanceName: {eq: "pageData"}, locale: {eq: "en-us"}, childMdx: {frontmatter: {contentKey: {eq: "header"}}}}
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
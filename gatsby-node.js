exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  const typeDefs = [
    `
    type Mdx implements Node {
      frontmatter: MdxFrontmatter
    }

    type MdxFrontmatterSections {
      content: String @mdx
    }

    type MdxFrontmatter {
      disclaimer: String @mdx
      sections: [MdxFrontmatterSections]
    }
  `,
    schema.buildObjectType({
      name: "File",
      fields: {
        locale: {
            type: "String",
            resolve: source => {
                return source.relativePath.includes('es-us') ? 'es-us' : 'en-us';
            },
        },
      },
      interfaces: ["Node"],
    }),
  ]
  createTypes(typeDefs)  
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query GetDynamicPages {
      allFile(filter: {sourceInstanceName: {eq: "dynamicPageData"}, childMdx: {frontmatter: {contentKey: {eq: "dynamicPage"}}}}) {
        edges {
          node {
            childMdx {
              frontmatter {
                sections {
                  content
                  contentKey
                  type
                  image {
                    childrenImageSharp {
                      gatsbyImageData
                    }
                  }
                  description
                }
                slug
              }
            }
            locale
            id
          }
        }
      }
    }
  `);

  const pages = result.data.allFile.edges;

  pages.forEach((page) => {
    const locale = page.node.locale;
    const slug = page.node.childMdx.frontmatter.slug;

    createPage({
      path: `/${locale}/${slug}`,
      component: require.resolve(`./src/templates/dynamicPage.tsx`),
      context: {
        id: page.node.id,
      },
    });
  });
};

/*exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
   resolve: {
      alias: {
        path: require.resolve("path-browserify"),
        stream: require.resolve("stream-browserify")
      },
      fallback: {
        path: require.resolve("path-browserify"),
        stream: require.resolve("stream-browserify")
      },
    },
  })
}*/
  
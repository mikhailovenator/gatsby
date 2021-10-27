exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  const typeDefs = [
    `
    type Mdx implements Node {
      frontmatter: MdxFrontmatter
    }

    type MdxFrontmatter {
      disclaimer: String @mdx
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
  
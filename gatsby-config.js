module.exports = {
    siteMetadata: {
        siteUrl: `https://bosswireless.com`,
        title: "BOSS Wireless",
        description: `BOSS Wireless Description`,
        author: `IDT`,
      },
      plugins: [
        {
          resolve: 'gatsby-plugin-typescript',
          options: {
            isTSX: true,
            allExtensions: true,
          },
        },
        `gatsby-plugin-postcss`,  
        {
          resolve: 'gatsby-source-filesystem',
          options: {
            name: 'assets',
            path: `${__dirname}/static/assets`
          }
        },
        `gatsby-plugin-react-helmet`,
        {
          resolve: `gatsby-theme-i18n`,
          options: {
            defaultLang: `en-us`,
            prefixDefault: true,
            configPath: require.resolve(`./i18n/config.json`),
          },
        },
        {
          resolve: `gatsby-theme-i18n-react-i18next`,
          options: {
            locales: `./i18n/react-i18next`,
            i18nextOptions: {
              ns: ["translation"],
            },
          },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
          resolve: `gatsby-plugin-mdx`,
          options: {
            extensions: [`.mdx`, `.md`]
          },
        },
        "gatsby-plugin-mdx-frontmatter",
        {
          resolve: 'gatsby-source-filesystem',
          options: {
            name: 'pageData',
            path: `${__dirname}/src/pageData`
          }
        },
        {
          resolve: 'gatsby-plugin-netlify-cms',
          options: {
            //manualInit: true,
            modulePath: `${__dirname}/src/cms/cms.tsx`,
            /*customizeWebpackConfig: (config, { stage, plugins }) => {
              config.resolve = {
                ...config.resolve,
                alias: {
                  ...config.resolve.alias,
                  path: require.resolve("path-browserify"),
                  //stream: require.resolve("stream-browserify"),
                  os: require.resolve("os-browserify/browser"),
                  crypto: require.resolve("crypto-browserify"),
                  //assert: require.resolve("assert/"),
                  //util: require.resolve("util/"),
                  https: require.resolve("https-browserify"),
                  http: require.resolve("stream-http"),
                  constants: require.resolve("constants-browserify")
                },
                fallback: {
                  ...config.resolve.fallback,
                  fs: false,
                  stream: false,
                  child_process: false,
                  module: false
                }
              };
              if (stage === "build-javascript" || stage === "develop") {
                config.plugins.push(plugins.provide({ process: "process/browser" }));
              }
              config.plugins.push(plugins.provide({ Buffer: ["buffer", "Buffer"] }));
            }*/
          }
        }
      ]
    }
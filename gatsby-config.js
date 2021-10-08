module.exports = {
    siteMetadata: {
        siteUrl: `https://bosswireless.com`,
        title: "BOSS Wireless",
        description: `BOSS Wireless Description`,
        author: `IDT`,
      },
      plugins: [
        `gatsby-plugin-postcss`,  
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            path: `${__dirname}/src/pages`,
            name: `pages`,
          },
        },
        {
          resolve: 'gatsby-source-filesystem',
          options: {
            name: 'assets',
            path: `${__dirname}/static/assets`
          }
        },
        `gatsby-plugin-react-helmet`,
        {
          resolve: 'gatsby-plugin-netlify-cms',
          options: {
            modulePath: `${__dirname}/src/cms/cms.js`
          }
        },
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
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
          resolve: `gatsby-plugin-mdx`,
          options: {
            extensions: [`.mdx`, `.md`],
            gatsbyRemarkPlugins: [
              `gatsby-remark-images-anywhere`
            ],
          },
        },
        {
          resolve: 'gatsby-source-filesystem',
          options: {
            name: 'pageDataEn',
            path: `${__dirname}/src/pageData/en-us`
          }
        },
        {
          resolve: 'gatsby-source-filesystem',
          options: {
            name: 'pageDataEs',
            path: `${__dirname}/src/pageData/es-us`
          }
        },
      ]
    }
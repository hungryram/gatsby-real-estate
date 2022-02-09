module.exports = {
  siteMetadata: {
    title: `gatsby-real-estate`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        "trackingId": "1234545"
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-remark",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "data",
        "path": `${__dirname}/data/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "content",
        "path": `${__dirname}/content/pages`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "blog",
        "path": `${__dirname}/content/blog`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "legal",
        "path": `${__dirname}/content/legal`
      }
    },
  ]
};
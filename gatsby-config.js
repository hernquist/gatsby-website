module.exports = {
  siteMetadata: {
    title: 'Davids First Gatsby Site',
    desc: 'my first blog'
  },
  plugins: [
  'gatsby-plugin-react-helmet', 
  'gatsby-plugin-styled-components',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'img',
      path: `${__dirname}/src/images`
    }
  },
  'gatsby-transformer-remark',
  'gatsby-transformer-sharp',
  'gatsby-plugin-sharp'
],
}

// added styled components to the plugins

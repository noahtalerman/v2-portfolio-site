
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `DM Sans`,
            variants: [`400`, `500`, `700`],
          },
        ],
      },
    }, 
    {
      resolve: `gatsby-plugin-sass`,
    }
  ]
}
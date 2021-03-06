module.exports = {
	siteMetadata: {
		title: `e-Rise`,
		description: `Fundraising and charity platform for e-Residents community`,
		author: `daco.life`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-mdx`,
			options: {
				extensions: [".mdx", ".md"],
				defaultLayouts: {
					// This entry template will switch the page template based on
					// a frontmatter value provided in the CMS, allowing users to
					// choose different template layouts.
					default: require.resolve(
						`${__dirname}/src/page-templates/cms-entry.template.js`
					)
				}
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#0000F0`,
				theme_color: `#0000F0`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
			}
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
		{
			resolve: `gatsby-plugin-netlify-cms`,
			options: {
				modulePath: `${__dirname}/src/cms/cms.js` // for custom preview in the Netlify CMS
			}
		},
		"gatsby-plugin-emotion",
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`Raleway`,
					`source sans pro\:400,700,900` // you can also specify font weights and styles
				],
				display: "swap"
			}
		}
	]
};

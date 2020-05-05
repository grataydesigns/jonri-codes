module.exports = {
	siteMetadata: {
		title: `Jonri Codes`,
		description: `This is the personal portfolio and blog of Jonri Rothwell where I write about my coding and design journey.`,
	},
	plugins: [
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: [`.mdx`, ` .md`],
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/posts`,
				name: `posts`,
			},
		},
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
			},
		},
	],
};

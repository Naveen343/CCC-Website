let siteMetadata = {
	title: `CEK Clubs Collective`,
	capitalizeTitleOnHome: false,
	logo: `/images/logo.png`,
	icon: `/images/icon.png`,
	titleImage: `/images/wall.jpg`,
	introTag: `Divided by Names, United by Tech`,
	description: 's',
	author: `@_akzhy`,
	blogItemsPerPage: 10,
	portfolioItemsPerPage: 10,
	darkmode: true,
	navLinks: [{
			name: "HOME",
			url: "/"
		},
		{
			name: "CLUBS",
			url: "/portfolio"
		},
		{
			name: "CEK",
			url: "/blog"
		},
		{
			name: "ORG",
			url: "/about"
		},
		{
			name: "CONTACT",
			url: "/contact"
		}
	],
	footerLinks: [{
		name: "PRIVACY POLICY",
		url: "/privacy-policy"
	}],
	social: [{
			name: "Facebook",
			icon: "/images/Facebook.svg",
			url: "#"
		},
		{
			name: "Twitter",
			icon: "/images/Twitter.svg",
			url: "#"
		},
		{
			name: "Instagram",
			icon: "/images/Instagram.svg",
			url: "#"
		},
		{
			name: "Youtube",
			icon: "/images/Youtube.svg",
			url: "#"
		}
	],
	contact: {
		api_url: "./test.json",
		/* Leave this completely empty (no space either) if you don't want a contact form. */
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Proin ac consequat arcu.`,
		mail: "hi@akzhy.com",
		phone: "000-000-0000",
		address: "1234 \nLocation \nLocation"
	}
}

module.exports = {
	siteMetadata: siteMetadata,
	plugins: [
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
      			plugins: [
					"gatsby-remark-copy-linked-files",
        			{
          				resolve: `gatsby-remark-images`,
          				options: {
            				maxWidth: 1280
          				}
        			}
      			]
    		}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `contents`,
				path: `${__dirname}/contents/`
			}
		},
		{
			resolve: `gatsby-plugin-less`,
			options: {
				strictMath: true,
			},
		},
	],
}

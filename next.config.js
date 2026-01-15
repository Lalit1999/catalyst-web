/** @type {import('next').NextConfig} */

module.exports = {
	// eslint-disable-next-line
	webpack(config, { isServer }) {
		// Configures webpack to handle SVG files with SVGR. SVGR optimizes and transforms SVG files
		// into React components. See https://react-svgr.com/docs/next/

		// Grab the existing rule that handles SVG imports
		// @ts-ignore - rules is a private property that is not typed
		const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));

		config.module.rules.push(
		// Reapply the existing rule, but only for svg imports ending in ?url
		{
			...fileLoaderRule,
			test: /\.svg$/i,
			resourceQuery: /url/, // *.svg?url
		},
		// Convert all other *.svg imports to React components
		{
			test: /\.svg$/i,
			issuer: fileLoaderRule.issuer,
			resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
			use: ['@svgr/webpack'],
		}
		);

		// Modify the file loader rule to ignore *.svg, since we have it handled now.
		fileLoaderRule.exclude = /\.svg$/i;

		return config;
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'api.myarth.in',
				port: '',
				pathname: '/static/**',
			},
			{
				protocol: 'https',
				hostname: 'fastly.picsum.photos',
				port: '',
				pathname: '/id/**',
			},
			{
				protocol: 'https',
				hostname: 'storage.googleapis.com',
				port: '',
				pathname: '/myarth-lts/**',
			},
		],
		qualities: [70, 75, 100]
	},
	turbopack: {
		rules: {
			'*.svg': {
			loaders: ['@svgr/webpack'],
			as: '*.js',
			},
		},
	},
}
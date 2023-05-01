const colors = require("tailwindcss/colors");

module.exports = {
	mode: "jit",
	darkMode: 'media', // or 'media' or 'class'
	content: [
		"./*.html",
		"./*.js",
		"./*.css",
		"./public/css/*.css",
		"./public/js/*.js",
		"./css/*.css",
		"./js/*.js",
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {},
		colors: {
			...colors,
			transparent: "transparent",
			current: "currentColor",
			// black: colors.black,
			// white: colors.white,
			gray: colors.neutral,
			// indigo: colors.indigo,
			// red: colors.rose,
			// yellow: colors.amber,
			// sky: colors.sky,
			// slate: colors.slate,
			// stone: colors.stone,
			// green: colors.green,
			// amber: colors.amber,
			// violet: colors.violet,
			// cyan: colors.cyan,
			// emerald: colors.emerald,
			// pink: colors.pink,
			// blue: colors.blue,
			// indigo: colors.indigo,
			// violet: colors.violet,
			// rose: colors.rose,


			// primary: "#001856",
			primary: "#000248", //original
			// primary: "#082159", //primary-2
			// primary: "#000f36",
			// primary: "#000920",
			// primary: "#010a21", //good

			// primaryDark: "#00021e", //good
			primaryDark: "#010233", //original
			// primaryDark: "#021744", //secondary-2

			humans: "#71008c",
			animals: "#8e8b00",
			plants: "#0b6c00",
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/line-clamp'),
	],

};

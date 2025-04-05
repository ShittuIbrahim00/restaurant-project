/** @type {import('tailwindcss').Config} */
export default {
	content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
	  extend: {
		fontFamily: {
		  sans: ["Open Sans", "sans-serif"],  // Default sans-serif font
		  jakarta: ["Plus Jakarta Sans", "sans-serif"],
		  merienda: ["Merienda", "cursive"],
		},
		colors: {
			customColor: '#A6A182', // Your custom color
			customGreen: '#10B981',
			customBlack: '#0E110D',
			customGray: '#1F2120',
			customRoundedBg: '#363837',
		  },
	  },
	},
	plugins: [],
  }
  
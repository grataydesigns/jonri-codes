import Typography from "typography";

const typography = new Typography({
	baseFontSize: "16px",
	headerFontFamily: ["Rubik", "sans-serif"],
	bodyFontFamily: ["Rubik", "sans-serif"],
	googleFonts: [
		{
			name: "Rubik",
			styles: ["400", "500"],
		},
	],
});

export const { scale, rhythm, options } = typography;
export default typography;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        pt: ["var(--font-pt)"],
        pop: ["var(--font-pop)"],
      },

      colors: {
        blue: "#EEF9FA",
        green: "#499A07",
        yellow: "#FFB73B",
        black: "#1B1E1E",
      },
    },
  },
  plugins: [],
};

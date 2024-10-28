import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#171717",
        secondaryColor: "#C0C0C0",
        tertiaryColor: "#FF00FF",
        quaternaryColor: "#FFD700",
      },
    },
  },
  plugins: [],
};
export default config;

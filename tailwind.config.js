/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        inputImgMobile: "url(assets/inputImgMobile.svg)",
        inputImgDesktop: "url(assets/inputImgDesktop.svg)",
        boostDesktop: "url(assets/boostDesktop.svg)",
        boostMobile: "url(assets/boostMobile.svg)",
      },
      colors: {
        primaryColor: "hsl(180, 66%, 49%)",
        secondaryColor: "hsl(257, 27%, 26%)",
        gray: "hsl(0, 0%, 75%)",
        grayishViolet: "hsl(257, 7%, 63%)",
        veryDarkBlue: "hsl(255, 11%, 22%)",
        veryDarkViolet: "hsl(260, 8%, 14%)",
      },
    },
    screens: {
      sm: "480px",
      m: "766px",
      lg: "992px",
      xl: "1440px",
    },
  },
  plugins: [],
};

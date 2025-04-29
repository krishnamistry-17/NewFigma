/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sky: {
          bg: "#E0F8F2",
          head: "#009387",
          light: "#D9F2F7",
        },
        neon: {
          light: "#E0F8F2",
          bg: "#E3F8F8",
        },

        green: {
          dark: "#075e54",
          lightdark: "	#128c7e",
          lightgreen: "	#25d366",
          neon: "	#dcf8c6",
          bg: "#ece5dd",
          lightbg: "#F3FAFA",
        },
        red: {
          dark: "#db1c07",
        },
        yellow: {
          yelbg: "#FFF3E3",
          dark: "#B88E2F",
          btn: "#B88E2F",
          light: "#FCF8F3",
        },
        line: {
          light: "#E8E8E8",
        },
        white: {
          light: "#FFFFFF",
          pagebg: "#F5F5F5",
        },
        black: {
          border: "#D9D9D9",
          para: "#333333",
          light: "#9F9F9F",
          paradark: "#666666",
          dark: "#3A3A3A",
          darkest: "#000000",
          bname: "#242424",
          head: "#222222",
          heads: "#2E2F35",
          darkborder: "#2E2F35",
          darker: "#2E2F35",
        },
        blue: {
          light: "#69a2ff",
          default: "#1fb6ff",
          dark: "#051787",
        },
        pink: {
          light: "#be7699",
          second: "#d65e98",
          DEFAULT: "#ff49db",
          dark: "#a11056",
          lightbg: "#FAEDED",
        },
        gray: {
          comapreg: "#727272",
          graygridbg: "#C4C4C4",
          darkest: "#1f2d3d",
          dark: "#3c4858",
          DEFAULT: "#c0ccda",
          light: "#e0e6ed",
          lightest: "#f9fafc",
          graybg: "#F4F5F7",
          graypara: "#898989",
          graymoney: "#B0B0B0",
          lightpara: "#616161",
          sub: "#58595D",
          lightbg: "#F1F1F1",
        },
        cream: {
          bglight: "#F9F1E7",
          bg: "#FAF3EA",
          card: "#FDF3EA",
          lightborder: "#A89B90",
        },
        purple: {
          light: "#816DFA",
          bglight: "#EEECFF",
        },
        orange: {
          dark: "#FF6D2C",
        },
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui"],
        serif: ["ui-serif", "Georgia"],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter"],
        coverd: ["Covered By Your Grace"],
        roboto: ["Roboto"],
      },
      screens: {
        xs: "320px",
        sm: "480px",
        md: "768px",
        lg: "992px",
        xl: "1440px",
      },
      textShadow: {
        stroke: "2px black", // Custom text-stroke style
        strokedark: "#2E2F35",
        DEFAULT:
          "3px 3px 5px rgba(0, 4, 4, 0.5), 0px 4px 4px rgba(248, 249, 249, 0.5)",
      },
      translate: {
        "-50%": "-50%",
      },
    },
  },
  plugins: [],
};

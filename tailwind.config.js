/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      width: {
        "464px": "464px",
        "876px": "876px",
        "49.2%": "49.2%",
      },
      borderRadius: {
        "30px": "30px",
      },
      colors: {
        purple: {
          darkest: "#b854d4",
          dark: "#986db2",
          DEFAULT: "#d68fe9",
          light: "#b28fce",
        },
        gray: {
          DEFAULT: "#444",
        },
        "panel-bg": "#fbf4f1",
        "panel-theme": "#5d3523",
        "panel-border": "#ffe4d8",
      },
      animation: { "spin-slow": "spin 3s linear infinite" },
      scale: {
        120: "1.2",
      },
      boxShadow: {
        card: "0 14px 38px rgba(0,0,0,.08),0 3px 8px rgba(0,0,0,.06)",
        "card-hover": "0 14px 38px rgba(0,0,0,.14),0 3px 8px rgba(0,0,0,.12)",
      },
      fontSize: {
        "15px": ["15px", "27px"],
      },
      cursor: {
        custom: 'url("/assets/cursor/cursor.png"), auto !important',
        "custom-link": 'url("/assets/cursor/cursor_link.png"), auto !important',
      },
      screens: {
        "s-md": { max: "876px" },
      },
    },
  },
  plugins: [],
};

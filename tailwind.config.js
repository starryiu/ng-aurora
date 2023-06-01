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
        "mobile-bg": "#f4f8fb",
      },
      animation: { "spin-slow": "spin 3s linear infinite" },
      scale: {
        120: "1.2",
      },
      boxShadow: {
        card: "0 14px 38px rgba(0,0,0,.08),0 3px 8px rgba(0,0,0,.06)",
        "card-hover": "0 14px 38px rgba(0,0,0,.14),0 3px 8px rgba(0,0,0,.12)",
        nav: "inset 0 0 10px rgba(0, 0, 0, 0.2)",
        "nav-mobile": "0 -1px 2px rgba(0,0,0,.1)",
      },
      fontSize: {
        "15px": ["15px", "27px"],
      },
      cursor: {
        custom: 'url("/assets/meipoli-cursor/cursor.png"), auto !important',
        "custom-link":
          'url("/assets/meipoli-cursor/cursor_link.png"), auto !important',
      },
      screens: {
        "s-md": { max: "876px" },
        md: { min: "878px" },
      },
      backgroundImage: {
        "header-bg-mobile":
          "url('https://s-bj-1658-tools.oss.dogecdn.com/resource/cc6d3bccdadf26e64f52318e942c757e---mobile.jpg')",
      },
      rotate: {
        360: "360deg",
      },
    },
  },
  plugins: [],
};

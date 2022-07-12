/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["/src/index.html", "./src/**/*.{html,js}"],
  theme: {
    colors:{
       Verydarkbluemain: "hsl(217, 54%, 11%)",
       Verydarkbluecard: "hsl(216, 50%, 16%)",
       Verydarkblueline: "hsl(215, 32%, 27%)",
       White:  "hsl(0, 0%, 100%)",
       Softblue: "hsl(215, 51%, 70%)",
       Cyan: "hsl(178, 100%, 50%)",
    },
    screens:{
     Mobile: "375px",
      Desktop: "1440px",
    },
    extend: {
      fontFamily:{
        outfit:["outfit"]
      },
    },
  },
  plugins: [],
}

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
 daisyui: {
        themes: ["dark", "light", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter",
                  {
          potato: {

 "primary": "#b45309",

 "secondary": "#facc15",

 "accent": "#4d7c0f",

 "neutral": "#221D26",

 "base-100": "#713f12",

 "info": "#292524",

 "success": "#158A47",

 "warning": "#fde047",

 "error": "#be123c",
          },
        },],
  },

}

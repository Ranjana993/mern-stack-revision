/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors:{
        lightBlue:'#00BAF2',
        darkBlue:'#0F4A8A',
        shadowlightblue:'#00AFE3',
        darkShadowblue:'#0D3E80',
        btnColor:'#003C81'
      },
      backgroundImage: {
        'hero-pattern': "url('./assets/asset 41.avif')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}
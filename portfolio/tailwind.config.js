module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'short': { 'raw': '(max-height: 640px)' },
        // => @media (min-width: 640px) { ... }
      },
    },
    fontFamily: {
      test: ['Nunito'],
      name: ['IBM Plex Sans']
    }
  },
  plugins: [],
}

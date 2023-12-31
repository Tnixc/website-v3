// This doesn't actually do anything, it is just for the IDE to recognize the tailwind stuff
module.exports = {
  theme: {
    fontFamily: {
      sans: ["'Space Grotesk'", "system-ui", "sans-serif"],
      serif: ['"Crimson Pro"', "serif"],
    },
    borderRadius: {
      "4xl": "2rem",
      "5xl": "2.5rem",
      "6xl": "3rem",
      "7xl": "3.5rem",
      "8xl": "4rem",
      "9xl": "4.5rem",
      "10xl": "5rem",
    },
    extend: {
      colors: {
        rp: {
          base: "#191724",
          surface: "#1f1d2e",
          overlay: "#26233a",
          muted: "#6e6a86",
          subtle: "#908caa",
          text: "#e0def4",
          love: "#eb6f92",
          gold: "#f6c177",
          rose: "#ebbcba",
          pine: "#31748f",
          foam: "#9ccfd8",
          iris: "#c4a7e7",
          highlightLow: "#21202e",
          highlightMed: "#403d52",
          highlightHigh: "#524f67",
        },
        rpd: {
          base: "#faf4ed",
          surface: "#fffaf3",
          overlay: "#f2e9e1",
          muted: "#9893a5",
          subtle: "#797593",
          text: "#575279",
          love: "#b4637a",
          gold: "#ea9d34",
          rose: "#d7827e",
          pine: "#286983",
          foam: "#56949f",
          iris: "#907aa9",
          highlightLow: "#f4ede8",
          highlightMed: "#dfdad9",
          highlightHigh: "#cecacd",
        },
      },
    },
  },
  // (plugins, content, ...)
};

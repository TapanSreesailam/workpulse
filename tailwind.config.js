/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        // Updated color palette based on prompt
        primary: {
          DEFAULT: "#0D1B2A", // Dark Navy Blue
          50: "#E6EBF0",
          100: "#CCD7E0",
          200: "#99AFC1",
          300: "#6687A2",
          400: "#335F83",
          500: "#0D1B2A", // Main primary
          600: "#0B1824",
          700: "#09141D",
          800: "#070F16",
          900: "#040A0F",
        },
        secondary: {
          DEFAULT: "#F1F3F5", // Light Grey
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#F7F8F9",
          500: "#F1F3F5", // Main secondary
          600: "#D1D7DD",
          700: "#B1BCC5",
          800: "#91A1AE",
          900: "#718696",
        },
        accent: {
          DEFAULT: "#3E5C76", // Muted Blue
          50: "#EEF1F4",
          100: "#DCE3EA",
          200: "#B9C7D4",
          300: "#96ABBE",
          400: "#738FA8",
          500: "#3E5C76", // Main accent
          600: "#344E64",
          700: "#2A3F53",
          800: "#1F3042",
          900: "#152231",
          foreground: "hsl(var(--accent-foreground))",
        },
        text: {
          primary: "#212529", // Dark Grey
          white: "#FFFFFF", // White for buttons/labels
        },

        // Keep existing system colors for compatibility
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ["Inter", "Poppins", "sans-serif"],
      },
      fontSize: {
        h1: ["48px", { lineHeight: "1.1", fontWeight: "700" }],
        h2: ["36px", { lineHeight: "1.2", fontWeight: "600" }],
        h3: ["24px", { lineHeight: "1.3", fontWeight: "600" }],
        body: ["16px", { lineHeight: "1.5", fontWeight: "400" }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-slow": "bounce 3s infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-medium": "float 12s ease-in-out infinite",
        "float-fast": "float 6s ease-in-out infinite alternate",
        "slide-in-right": "slide-in-right 0.5s ease-out forwards",
        "slide-in-left": "slide-in-left 0.5s ease-out forwards",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "gradient-x": "gradient-x 15s ease infinite",
        shimmer: "shimmer 2s linear infinite",
        "rotate-slow": "rotate 12s linear infinite",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        "fade-in-up": {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        section: "80px",
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

import { fontFamily } from "tailwindcss/defaultTheme"
import plugin from "tailwindcss/plugin"

export const shadcnPlugin = plugin(
  // 1. Add CSS variable definitions to the base layer
  function ({ addBase }) {
    addBase({
      ":root": {
        "--background": "0 0% 100%",
        "--foreground": "20 14.3% 4.1%",
        "--card": "0 0% 100%",
        "--card-foreground": "20 14.3% 4.1%",
        "--popover": "0 0% 100%",
        "--popover-foreground": "20 14.3% 4.1%",
        "--primary": "47.9 95.8% 53.1%",
        "--primary-foreground": "26 83.3% 14.1%",
        "--secondary": "60 4.8% 95.9%",
        "--secondary-foreground": "24 9.8% 10%",
        "--muted": "60 4.8% 95.9%",
        "--muted-foreground": "25 5.3% 44.7%",
        "--accent": "60 4.8% 95.9%",
        "--accent-foreground": "24 9.8% 10%",
        "--destructive": "0 84.2% 60.2%",
        "--destructive-foreground": "60 9.1% 97.8%",
        "--border": "20 5.9% 90%",
        "--input": "20 5.9% 90%",
        "--ring": "20 14.3% 4.1%",
        "--radius": "0.5rem",
        "--chart-1": "12 76% 61%",
        "--chart-2": "173 58% 39%",
        "--chart-3": "197 37% 24%",
        "--chart-4": "43 74% 66%",
        "--chart-5": "27 87% 67%",
      },
      ".dark": {
        "--background": "20 14.3% 4.1%",
        "--foreground": "60 9.1% 97.8%",
        "--card": "20 14.3% 4.1%",
        "--card-foreground": "60 9.1% 97.8%",
        "--popover": "20 14.3% 4.1%",
        "--popover-foreground": "60 9.1% 97.8%",
        "--primary": "47.9 95.8% 53.1%",
        "--primary-foreground": "26 83.3% 14.1%",
        "--secondary": "12 6.5% 15.1%",
        "--secondary-foreground": "60 9.1% 97.8%",
        "--muted": "12 6.5% 15.1%",
        "--muted-foreground": "24 5.4% 63.9%",
        "--accent": "12 6.5% 15.1%",
        "--accent-foreground": "60 9.1% 97.8%",
        "--destructive": "0 62.8% 30.6%",
        "--destructive-foreground": "60 9.1% 97.8%",
        "--border": "12 6.5% 15.1%",
        "--input": "12 6.5% 15.1%",
        "--ring": "35.5 91.7% 32.9%",
        "--chart-1": "220 70% 50%",
        "--chart-2": "160 60% 45%",
        "--chart-3": "30 80% 55%",
        "--chart-4": "280 65% 60%",
        "--chart-5": "340 75% 55%",
      },
    })

    addBase({
      "*": {
        "@apply border-border": {},
      },
      body: {
        "@apply bg-background text-foreground": {},
      },
    })
  },

  // 2. Extend the Tailwind theme with "themable" utilities
  {
    theme: {
      container: {
        center: true,
        padding: "1rem",
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
          primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
            foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
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
        borderRadius: {
          xl: `calc(var(--radius) + 4px)`,
          lg: `var(--radius)`,
          md: `calc(var(--radius) - 2px)`,
          sm: "calc(var(--radius) - 4px)",
        },
        fontFamily: {
          sans: ["var(--font-sans)", ...fontFamily.sans],
          heading: ["var(--font-heading)", ...fontFamily.sans],
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
          "caret-blink": {
            "0%,70%,100%": { opacity: "1" },
            "20%,50%": { opacity: "0" },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
          "caret-blink": "caret-blink 1.25s ease-out infinite",
        },
        aspectRatio: {
          poster: "3 / 4",
        },
      },
    },
  }
)

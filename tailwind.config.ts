/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

import colors from "./src/app/theme/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: true,
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        "primary-dark": colors.primary.dark,
        "primary-base": colors.primary.base,
        "primary-light": colors.primary.light,
        "primary-lightest": colors.primary.lightest,

        "secondary-dark": colors.secondary.dark,
        "secondary-base": colors.secondary.base,
        "secondary-light": colors.secondary.light,

        "support-dark": colors.support.dark,
        "support-base": colors.support.base,
        "support-light": colors.support.light,

        "success-dark": colors.success.dark,
        "success-base": colors.success.base,
        "success-light": colors.success.light,

        "error-dark": colors.error.dark,
        "error-base": colors.error.base,
        "error-light": colors.error.light,

        "warning-dark": colors.warning.dark,
        "warning-base": colors.warning.base,
        "warning-light": colors.warning.light,

        "neutral-950": colors.neutral[950],
        "neutral-900": colors.neutral[900],
        "neutral-800": colors.neutral[800],
        "neutral-700": colors.neutral[700],
        "neutral-600": colors.neutral[600],
        "neutral-500": colors.neutral[500],
        "neutral-400": colors.neutral[400],
        "neutral-300": colors.neutral[300],
        "neutral-200": colors.neutral[200],
        "neutral-100": colors.neutral[100],
        "neutral-50": colors.neutral[50],

        "text-primary": colors.text.primary,
        "text-secondary": colors.text.secondary,
      },
      screens: {
        "max-sm": { raw: "not all and (min-width: 640px)" },
        "max-md": { raw: "not all and (min-width: 768px)" },
        "max-lg": { raw: "not all and (min-width: 1024px)" },
        "max-xl": { raw: "not all and (min-width: 1280px)" },
        "max-2xl": { raw: "not all and (min-width: 1536px)" },
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;

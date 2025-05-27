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

        "multi-primary-darkest": colors.primary.darkest,
        "multi-primary-dark": colors.primary.dark,
        "multi-primary-base": colors.primary.base,
        "multi-primary-lightest": colors.primary.light,
        "multi-primary-lighter": colors.primary.lightest,

        "multi-secondary-darkest": colors.secondary.darkest,
        "multi-secondary-dark": colors.secondary.dark,
        "multi-secondary-base": colors.secondary.base,
        "multi-secondary-lightest": colors.secondary.light,
        "multi-secondary-lighter": colors.secondary.lightest,

        "multi-support-darkest": colors.support.darkest,
        "multi-support-dark": colors.support.dark,
        "multi-support-base": colors.support.base,
        "multi-support-lightest": colors.support.light,
        "multi-support-lighter": colors.support.lightest,

        "multi-success-darkest": colors.success.darkest,
        "multi-success-dark": colors.success.dark,
        "multi-success-base": colors.success.base,
        "multi-success-lightest": colors.success.light,
        "multi-success-lighter": colors.success.lightest,

        "multi-error-darkest": colors.error.darkest,
        "multi-error-dark": colors.error.dark,
        "multi-error-base": colors.error.base,
        "multi-error-lightest": colors.error.light,
        "multi-error-lighter": colors.error.lightest,

        "multi-warning-darkest": colors.warning.darkest,
        "multi-warning-dark": colors.warning.dark,
        "multi-warning-base": colors.warning.base,
        "multi-warning-lightest": colors.warning.light,
        "multi-warning-lighter": colors.warning.lightest,

        "multi-neutral-950": colors.neutral[950],
        "multi-neutral-900": colors.neutral[900],
        "multi-neutral-800": colors.neutral[800],
        "multi-neutral-700": colors.neutral[700],
        "multi-neutral-600": colors.neutral[600],
        "multi-neutral-500": colors.neutral[500],
        "multi-neutral-400": colors.neutral[400],
        "multi-neutral-300": colors.neutral[300],
        "multi-neutral-200": colors.neutral[200],
        "multi-neutral-100": colors.neutral[100],
        "multi-neutral-50": colors.neutral[50],

        "multi-primary-48": colors.primary[48],
        "multi-primary-24": colors.primary[24],
        "multi-primary-16": colors.primary[16],
        "multi-primary-8": colors.primary[8],

        "multi-text-primary": colors.text.primary,
        "multi-text-secondary": colors.text.secondary,
      },
      screens: {
        "max-sm": { raw: "not all and (min-width: 640px)" },
        "max-md": { raw: "not all and (min-width: 768px)" },
        "max-lg": { raw: "not all and (min-width: 1024px)" },
        "max-xl": { raw: "not all and (min-width: 1280px)" },
        "max-2xl": { raw: "not all and (min-width: 1536px)" },
        lgh: { raw: "((min-width: 640px) and (max-height: 800px))" },
        "h-lg": { raw: "((min-width: 640px) and (max-height: 800px))" },
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;

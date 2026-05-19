/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Baloo 2', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        // Original brand tokens
        peach: 'hsl(var(--peach))',
        mint: 'hsl(var(--mint))',
        honey: 'hsl(var(--honey))',
        lavender: 'hsl(var(--lavender))',
        // Compatibility aliases kept for components
        'rose-soft': 'hsl(345, 55%, 93%)',
        'sage-soft': 'hsl(152, 40%, 94%)',
        'amber-soft': 'hsl(40, 80%, 92%)',
        'sky-soft': 'hsl(210, 60%, 92%)',
        cream: 'hsl(38, 40%, 97%)',
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
        sm: 'calc(var(--radius) - 4px)',
        md: 'calc(var(--radius) - 2px)',
        lg: 'var(--radius)',
        xl: 'calc(var(--radius) + 4px)',
        '2xl': 'calc(var(--radius) + 8px)',
        '3xl': 'calc(var(--radius) + 16px)',
        full: '9999px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
      },
      boxShadow: {
        'card': '0 2px 12px hsla(222, 25%, 14%, 0.06), 0 1px 4px hsla(222, 25%, 14%, 0.04)',
        'card-hover': '0 8px 32px hsla(222, 25%, 14%, 0.10), 0 2px 8px hsla(222, 25%, 14%, 0.06)',
        'cta': '0 4px 20px hsla(152, 50%, 42%, 0.35)',
        'cta-hover': '0 6px 28px hsla(152, 50%, 42%, 0.45)',
      },
    },
  },
  plugins: [],
}

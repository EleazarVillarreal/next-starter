import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: 'var(--accent)',
          5: 'var(--accent5)',
          10: 'var(--accent10)',
          15: 'var(--accent15)',
          20: 'var(--accent20)',
          25: 'var(--accent25)',
          30: 'var(--accent30)',
          35: 'var(--accent35)',
          40: 'var(--accent40)',
          45: 'var(--accent45)',
          50: 'var(--accent50)',
          55: 'var(--accent55)',
          60: 'var(--accent60)',
          65: 'var(--accent65)',
          70: 'var(--accent70)',
          75: 'var(--accent75)',
          80: 'var(--accent80)',
          85: 'var(--accent85)',
          90: 'var(--accent90)',
          95: 'var(--accent95)'
        },
        bg: {
          DEFAULT: 'var(--bg)',
          5: 'var(--bg5)',
          10: 'var(--bg10)',
          15: 'var(--bg15)',
          20: 'var(--bg20)',
          25: 'var(--bg25)',
          30: 'var(--bg30)',
          35: 'var(--bg35)',
          40: 'var(--bg40)',
          45: 'var(--bg45)',
          50: 'var(--bg50)',
          55: 'var(--bg55)',
          60: 'var(--bg60)',
          65: 'var(--bg65)',
          70: 'var(--bg70)',
          75: 'var(--bg75)',
          80: 'var(--bg80)',
          85: 'var(--bg85)',
          90: 'var(--bg90)',
          95: 'var(--bg95)'
        },
        primary: {
          DEFAULT: 'var(--primary)',
          5: 'var(--primary5)',
          10: 'var(--primary10)',
          15: 'var(--primary15)',
          20: 'var(--primary20)',
          25: 'var(--primary25)',
          30: 'var(--primary30)',
          35: 'var(--primary35)',
          40: 'var(--primary40)',
          45: 'var(--primary45)',
          50: 'var(--primary50)',
          55: 'var(--primary55)',
          60: 'var(--primary60)',
          65: 'var(--primary65)',
          70: 'var(--primary70)',
          75: 'var(--primary75)',
          80: 'var(--primary80)',
          85: 'var(--primary85)',
          90: 'var(--primary90)',
          95: 'var(--primary95)'
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          5: 'var(--secondary5)',
          10: 'var(--secondary10)',
          15: 'var(--secondary15)',
          20: 'var(--secondary20)',
          25: 'var(--secondary25)',
          30: 'var(--secondary30)',
          35: 'var(--secondary35)',
          40: 'var(--secondary40)',
          45: 'var(--secondary45)',
          50: 'var(--secondary50)',
          55: 'var(--secondary55)',
          60: 'var(--secondary60)',
          65: 'var(--secondary65)',
          70: 'var(--secondary70)',
          75: 'var(--secondary75)',
          80: 'var(--secondary80)',
          85: 'var(--secondary85)',
          90: 'var(--secondary90)',
          95: 'var(--secondary95)'
        },
        text: {
          DEFAULT: 'var(--text)',
          5: 'var(--text5)',
          10: 'var(--text10)',
          15: 'var(--text15)',
          20: 'var(--text20)',
          25: 'var(--text25)',
          30: 'var(--text30)',
          35: 'var(--text35)',
          40: 'var(--text40)',
          45: 'var(--text45)',
          50: 'var(--text50)',
          55: 'var(--text55)',
          60: 'var(--text60)',
          65: 'var(--text65)',
          70: 'var(--text70)',
          75: 'var(--text75)',
          80: 'var(--text80)',
          85: 'var(--text85)',
          90: 'var(--text90)',
          95: 'var(--text95)'
        }
      },
      fontSize: {
        xs: '0.56rem',
        sm: '0.75rem',
        base: '1rem',
        lg: '1.33rem',
        xl: '1.78rem',
        '2xl': '2.37rem',
        '3xl': '3.16rem',
        '4xl': '4.21rem',
        '5xl': '5.61rem',
        '6xl': '7.48rem',
        '7xl': '9.97rem'
      }
    }
  }
} satisfies Config

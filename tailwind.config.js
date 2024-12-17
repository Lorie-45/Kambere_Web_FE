/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@mantine/core/**/*.js",
    "./node_modules/@mantine/charts/**/*.js",
  ],
  theme: {
  	extend: {
  		colors: {
  			backgroundSec: '#F8FFE5',
  			component1: '#2A4D14',
  			component2: '#F5A623',
  			component3: '#DE541E',
  			color1: '#E1E2F6',
  			color2: '#FFD2BA',
  			color3: '#FFE772',
  			color4: '#F8C36B',
  			icon1: '#3A3D7F',
  			icon2: '#AF643B',
  			icon3: '#805000',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'Nunito',
  				'sans-serif'
  			],
  			heading: [
  				'Agbalumo',
  				'sans-serif'
  			]
  		},
  		animation: {
  			'border-fill': 'borderFill 0.5s ease-in-out forwards ',
  			'icon-color': 'iconColor 0.5s ease-in-out forwards '
  		},
  		keyframes: {
  			borderFill: {
  				'0%': {
  					borderColor: 'gray'
  				},
  				'100%': {
  					borderColor: '#000000'
  				}
  			},
  			iconColor: {
  				'0%': {
  					color: 'gray'
  				},
  				'100%': {
  					color: '#000000'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: ["tailwindcss-animate"],
}


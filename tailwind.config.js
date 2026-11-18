/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            animation: {
                'bounce-subtle': 'bounce-subtle 1s infinite',
            },
            keyframes: {
                'bounce-subtle': {
                    '0%, 100%': {
                        transform: 'translateY(-3%)',
                        animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
                    },
                    '50%': {
                        transform: 'translateY(0)',
                        animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
                    },
                },
            },
            fontFamily: {
                poppins: ['var(--font-poppins)', 'sans-serif'],
                inter: ['var(--font-inter)', 'sans-serif'],
            },
            colors: {
                brand: '#2563EB',
                'brand-dark': '#1D4ED8',
                'brand-light': '#f6f7f9',
                navy: '#0F1B35',
                gold: '#B88A3B',
                'gray-custom': '#222',
                'dark-brand': '#0F1B35',
                'dark-05': '#0F1B35',
                'dark-10': '#101a2e',
                'dark-20': '#13203a',
                'dark-30': '#c4c4c4',
                text: '#0B1220',
                'text-secondary': '#667085',
                offwhite: '#F6F7F9',
                'brand-border': '#E5E7EB',
            },
            padding: {
                desktop: '2.4rem 6.4rem',
                tablet: '2rem 4rem',
                mobile: '1.5rem',
            },
        },
    },
    plugins: [],
};

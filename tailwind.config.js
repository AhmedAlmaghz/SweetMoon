/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-delay': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1.5s ease-out',
        'fade-in-delay': 'fade-in-delay 2s ease-out',
        bounce: 'bounce 2s infinite',
      },
      colors: {
        primary: '#FF6347',  // لون رئيسي جديد (Tomato)
        secondary: '#FF4500', // لون ثانوي جديد (OrangeRed)
        dark: '#1a202c',      // لون داكن عام (قريب من الأسود)
        light: '#f7fafc',     // لون فاتح عام (قريب من الأبيض)
      },
    },
  },
  plugins: [],
}
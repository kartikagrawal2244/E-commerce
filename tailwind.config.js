/** @type {import('tailwindcss').Config} */

export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];

export const theme = {
  extend: {
    boxShadow: {
      '3xl': '-37px -37px 0 0px #af8fae',
      '4xl': '37px -37px 0 0px #af8fae',
    }
  },
};

export const plugins = [];


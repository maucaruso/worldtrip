import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      "500": "#47585B",
      "400": "#999999",
      "300": "#DADADA",
      "200": "#F5F8FA"
    },
    orange: {
      "500": "#FFBA08" 
    }
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.200',
        color: 'gray.500'
      }
    }
  }
});
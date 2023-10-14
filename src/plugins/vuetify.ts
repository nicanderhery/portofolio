/**
 * Plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { md3 } from 'vuetify/blueprints';

// Composables
import { createVuetify } from 'vuetify';

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  blueprint: md3,
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#006d77',
          secondary: '#7c9599',
          background: '#fafdfd',
          surface: '#fafdfd',
        },
      },
      dark: {
        colors: {
          primary: '#4ed8e8',
          secondary: '#b1cbcf',
          background: '#191c1d',
          surface: '#3f484a',
        },
      },
    },
  },
});

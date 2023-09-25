<template>
  <v-app-bar flat>
    <v-app-bar-title />
    <v-btn @click="toggleTheme">
      <v-icon>{{ buttonIcon }}</v-icon>
      <span class="hidden-sm-and-down pl-1">{{ buttonText }}</span>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { useTheme } from 'vuetify';
import { ref } from 'vue';

const theme = useTheme();
const buttonIcon = ref('mdi-white-balance-sunny');
const buttonText = ref('Light mode');
const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
  buttonIcon.value = theme.global.current.value.dark
    ? 'mdi-moon-waning-crescent'
    : 'mdi-white-balance-sunny';
  buttonText.value = theme.global.current.value.dark ? 'Dark mode' : 'Light mode';
};
</script>

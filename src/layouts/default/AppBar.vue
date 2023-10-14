<template>
  <v-app-bar class="bg-transparent" flat>
    <v-app-bar-title />
    <v-btn :icon="buttonIcon" @click="toggleTheme" />
  </v-app-bar>
</template>

<script lang="ts" setup>
import { useTheme } from 'vuetify';
import { ref } from 'vue';

const theme = useTheme();
const buttonIcon = ref('mdi-white-balance-sunny');
const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
  buttonIcon.value = theme.global.current.value.dark
    ? 'mdi-moon-waning-crescent'
    : 'mdi-white-balance-sunny';
  localStorage.setItem('theme', theme.global.name.value);
};
const darkMode = localStorage.getItem('theme') === 'dark';
if (darkMode) {
  toggleTheme();
}
</script>

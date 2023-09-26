<template>
  <v-container>
    <h1 class="text-h4 text-lg-h3 text-center pb-5">What are skills that I am familiar with?</h1>
    <v-row class="elevation-3 py-4" justify="center" no-gutters>
      <v-col v-for="skill in skills" :key="skill.name" cols="3" lg="2">
        <v-img :src="skill.iconUrl" height="4rem" />
        <p class="text-caption">{{ skill.name }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts" setup>
import { categories } from '@/data';

const skills = categories.flatMap((category) => category.skills);
</script>

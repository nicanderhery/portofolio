<template>
  <v-container class="fill-height">
    <v-responsive class="align-top text-center fill-height">
      <v-avatar class="mb-8" size="16rem">
        <v-img src="https://avatars.githubusercontent.com/u/99594065" />
      </v-avatar>

      <v-tabs v-model="tab" grow>
        <v-tab value="introduction">Introduction</v-tab>
        <v-tab value="technical-skills">Technical Skills</v-tab>
        <v-tab value="projects">Projects</v-tab>
      </v-tabs>

      <v-window v-model="tab">
        <v-window-item value="introduction">
          <Introduction />
        </v-window-item>
        <v-window-item value="technical-skills">
          <TechnicalSkills />
        </v-window-item>
        <v-window-item value="projects">
          <Projects />
        </v-window-item>
      </v-window>
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import TechnicalSkills from '@/components/TechnicalSkills.vue';
import Introduction from '@/components/Introduction.vue';
import Projects from '@/components/Projects.vue';

const tab = ref(0);
</script>

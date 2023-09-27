<template>
  <v-container class="fill-height">
    <v-responsive class="align-top text-center fill-height">
      <v-avatar class="mb-8" size="16rem">
        <v-img src="https://avatars.githubusercontent.com/u/99594065" />
      </v-avatar>

      <v-tabs v-model="tab" grow>
        <v-tab :value="0">Introduction</v-tab>
        <v-tab :value="1">Technical Skills</v-tab>
        <v-tab :value="2">Projects</v-tab>
      </v-tabs>

      <v-window v-model="tab" class="fill-height" @wheel="onWheel">
        <v-window-item :value="0">
          <Introduction />
        </v-window-item>
        <v-window-item :value="1">
          <TechnicalSkills />
        </v-window-item>
        <v-window-item :value="2">
          <Projects />
        </v-window-item>
      </v-window>
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
import Introduction from '@/components/Introduction.vue';
import Projects from '@/components/Projects.vue';
import TechnicalSkills from '@/components/TechnicalSkills.vue';
import { ref } from 'vue';

const tab = ref(0);
let lastWheelTimestamp = 0;
const onWheel = (e: WheelEvent) => {
  // Delay wheel event to prevent scrolling too fast
  const now = Date.now();
  if (now - lastWheelTimestamp < 250) {
    return;
  }
  lastWheelTimestamp = now;

  if (e.deltaY < 0) {
    tab.value = tab.value === 0 ? 2 : tab.value - 1;
  } else {
    tab.value = tab.value === 2 ? 0 : tab.value + 1;
  }
};
</script>

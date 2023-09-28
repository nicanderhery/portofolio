<template>
  <v-container class="fill-height">
    <v-responsive class="align-top text-center fill-height">
      <div class="d-flex flex-column justify-center align-center" style="height: 100vh">
        <v-avatar size="12rem">
          <v-img src="https://avatars.githubusercontent.com/u/99594065" />
        </v-avatar>
        <v-spacer />
        <h1 class="text-h3 text-lg-h1 font-italic">Hello there.</h1>
        <v-spacer />
        <v-spacer />
        <v-spacer />
      </div>

      <AnimationSlot animation-type="slide-from-right" style="min-height: 100vh">
        <Introduction />
      </AnimationSlot>
      <AnimationSlot animation-type="slide-from-left" style="min-height: 100vh">
        <TechnicalSkills />
      </AnimationSlot>
      <AnimationSlot animation-type="slide-from-right">
        <ContactMe />
      </AnimationSlot>
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
import AnimationSlot from '@/components/AnimationSlot.vue';
import ContactMe from '@/components/ContactMe.vue';
import Introduction from '@/components/Introduction.vue';
import TechnicalSkills from '@/components/TechnicalSkills.vue';
</script>

<template>
  <v-container>
    <h1 class="text-h4 text-lg-h3 text-center pb-5">Welcome to my Portofolio website!</h1>
    <h1 class="text-body-1 text-lg-h4 text-left pb-5">
      I'm Agustinus Nicander Hery, also known as Nic, a dedicated computer science student at
      <a href="https://h-da.de/">Hochschule Darmstadt</a>, now in my 6th semester. My journey in
      programming has led me to explore a diverse set of technologies. I've honed my skills in
      building robust backends using Express and .NET, while also venturing into front-end
      development with React.
    </h1>
    <h1 class="text-body-1 text-lg-h4 text-left">
      This semester, I'm excited to delve into advanced web development using React and Chakra UI.
      Beyond the classroom, I've crafted a practical inventory app for my family using React Native.
      My ultimate career aspiration is to become a proficient web developer, capable of creating
      innovative and user-friendly web applications. I thrive on challenges and the opportunity to
      continuously expand my knowledge in the dynamic world of computer science.
    </h1>
  </v-container>

  <v-container>
    <v-btn @click="showDialog = true">Download my CV</v-btn>
    <v-dialog v-model="showDialog" width="auto">
      <v-card>
        <v-card-title class="headline">Choose your language</v-card-title>
        <v-card-actions>
          <v-btn color="primary" @click="downloadCV">English</v-btn>
          <v-spacer />
          <v-btn color="primary" @click="downloadCV('de')">German</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const showDialog = ref(false);

const downloadCV = (languange?: string) => {
  if (typeof languange !== 'string') {
    languange = 'en';
  }
  const link = document.createElement('a');
  link.href = 'hery_cv';
  link.href += `_${languange}`;
  link.href += '.pdf';
  link.target = '_blank';
  link.click();
};
</script>

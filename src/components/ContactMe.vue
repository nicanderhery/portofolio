<template>
  <v-container>
    <h1 class="text-h4 text-lg-h3 text-center pb-5">Contact me through this form!</h1>
    <v-form ref="form" @submit.prevent="sendEmail">
      <v-text-field v-model="name" :rules="nameRules" label="Name" required />
      <v-text-field v-model="email" :rules="emailRules" label="Email" required />
      <v-textarea v-model="message" :rules="messageRules" label="Message" required />
      <v-btn block class="mt-5" type="submit">Send</v-btn>
    </v-form>
    <v-dialog v-model="showDialog" persistent width="auto">
      <v-card>
        <v-progress-circular
          v-if="loading"
          class="mx-16 my-8"
          color="primary"
          indeterminate
          size="64"
        />
        <div v-if="!loading">
          <v-card-title class="headline">{{ messageTitle }}</v-card-title>
          <v-card-text>{{ messageBody }}</v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" @click="showDialog = false">Close</v-btn>
          </v-card-actions>
        </div>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script lang="ts" setup>
import emailjs from 'emailjs-com';
import { ref } from 'vue';

const form = ref<HTMLFormElement | null>(null);
const name = ref('');
const email = ref('');
const message = ref('');
const messageTitle = ref('');
const messageBody = ref('');
const showDialog = ref(false);
const loading = ref(false);

const nameRules = [(name: string) => !!name || 'Name is required'];
const emailRules = [
  (email: string) => !!email || 'Email is required',
  (email: string) => /.+@.+\..+/.test(email) || 'Email must be valid',
];
const messageRules = [
  (message: string) => !!message || 'Message is required',
  (message: string) => message.length > 10 || 'Message must be more than 10 characters',
];

const sendEmail = () => {
  for (const rule of nameRules) {
    if (rule(name.value) !== true) {
      return;
    }
  }
  for (const rule of emailRules) {
    if (rule(email.value) !== true) {
      return;
    }
  }
  for (const rule of messageRules) {
    if (rule(message.value) !== true) {
      return;
    }
  }

  messageTitle.value = '';
  messageBody.value = '';
  showDialog.value = true;
  loading.value = true;

  const templateParams = {
    from_name: name.value,
    from_email: email.value,
    message: message.value,
    to_name: 'Nic',
  };

  emailjs
    .send('nicanderhery-emailjs', 'nicanderhery-emailjs', templateParams, 'Pn4UNFM0h-y1jG7nI')
    .then((response) => {
      if (response.status !== 200) {
        throw '';
      }
      messageTitle.value = 'Success';
      messageBody.value = 'Your message has been sent!';
      form.value?.reset();
    })
    .catch(() => {
      messageTitle.value = 'Error';
      messageBody.value = 'There was an error sending your message. Please try again later.';
    })
    .finally(() => {
      loading.value = false;
    });
};
</script>

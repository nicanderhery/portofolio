<template>
  <v-container>
    <h1 class="text-h4 text-lg-h3 text-center pb-5">Contact me through this form!</h1>

    <v-form ref="form" @submit.prevent="sendEmail">
      <v-text-field v-model="name" :rules="nameRules" label="Name" required />
      <v-text-field v-model="email" :rules="emailRules" label="Email" required />
      <v-textarea v-model="message" :rules="messageRules" label="Message" required />
      <v-btn block type="submit">Send</v-btn>
    </v-form>

    <v-dialog v-model="dialogSuccess" width="auto">
      <v-card>
        <v-card-title class="headline">Thank you for your message!</v-card-title>
        <v-card-text>We will get back to you as soon as possible.</v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" @click="dialogSuccess = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogError" width="auto">
      <v-card>
        <v-card-title class="headline">Something went wrong!</v-card-title>
        <v-card-text>Please try again later.</v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" @click="dialogError = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script lang="ts" setup>
import emailjs from 'emailjs-com';
import { Ref, ref } from 'vue';

const form: Ref<HTMLFormElement | null> = ref(null);
const name = ref('');
const email = ref('');
const message = ref('');
const dialogSuccess = ref(false);
const dialogError = ref(false);

const nameRules = [(name: string) => !!name || 'Name is required'];
const emailRules = [
  (email: string) => !!email || 'Email is required',
  (email: string) => /.+@.+\..+/.test(email) || 'Email must be valid',
];
const messageRules = [
  (message: string) => !!message || 'Message is required',
  (message: string) => message.length > 10 || 'Message must be more than 10 characters',
];

const sendEmail = async () => {
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

  const templateParams = {
    from_name: name.value,
    from_email: email.value,
    message: message.value,
    to_name: 'Nic',
  };

  const success = await emailjs.send(
    'nicanderhery-emailjs',
    'nicanderhery-emailjs',
    templateParams,
    'Pn4UNFM0h-y1jG7nI',
  );
  if (success.status !== 200) {
    dialogError.value = true;
    return;
  }

  dialogSuccess.value = true;
  form.value?.reset();
};
</script>

<!-- src/views/Login.vue -->
<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import api from '@/api';

const auth = useAuthStore();
const credentials = ref({ email: '', password: '' });

const login = async () => {
  try {
    const res = await api.post('/auth/login', credentials.value);
    auth.setToken(res.data.token);
    router.push('/');
  } catch (error) {
    alert('Login failed!');
  }
};
</script>

<!-- The .prevent modifier is a Vue event modifier that calls event.preventDefault() on the event. 
 When the form is submitted, call the login function and prevent the default form submission behavior (no page reload). -->
<template>
  <form @submit.prevent="login">
    <!-- Vue’s v-model directive provides two-way data binding between the input’s value and the credentials.email property 
     in the <script setup> section. When the user types in the input, credentials.email updates automatically, and vice versa.-->
    <input v-model="credentials.email" placeholder="Email" />
    <input v-model="credentials.password" type="password" placeholder="Password" />
    <button type="submit">Login</button>
  </form>
</template>
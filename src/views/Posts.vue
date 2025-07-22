<script setup>
import { ref, onMounted } from 'vue';
import api from '../api';

// The ref([]) in the provided Vue 3 component code is a key part of Vue’s Composition API, used to create a reactive reference for managing state. 
// A reactive reference is an object with a single property, .value, that holds the actual data. When .value is updated, Vue’s reactivity system 
// detects the change and triggers updates in any components or computed properties that depend on it.
// ref can hold any JavaScript value: primitives (such as numbers, strings) or complex types (such as arrays, objects).
const posts = ref([]);

onMounted(async () => {
  try {
    const response = await api.get('/posts');
    posts.value = response.data;
  } catch (error) {
    console.error('API error:', error);
  }
});
</script>

<template>
  <div v-for="post in posts" :key="post.id" class="p-4 border-b">
    <h3 class="font-bold">{{ post.title }}</h3>
    <p>{{ post.body }}</p>
  </div>
</template>
<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { useCounterStore } from '../stores/counter';
const counter = useCounterStore();
</script>

<template>
  <main>
    <TheWelcome />
    <button @click="counter.increment">Count: {{ counter.count }}</button>
  </main>
</template>

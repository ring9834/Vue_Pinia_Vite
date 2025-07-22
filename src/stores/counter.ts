import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// The store is exported as a composable (a function starting with use), allowing it to be imported and used in Vue components.
export const useCounterStore = defineStore('counter', () => {
  // Defines a reactive state variable count initialized to 0. Since it’s a ref, changes to count.value are reactive, 
  // meaning Vue will update any components that depend on it.
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

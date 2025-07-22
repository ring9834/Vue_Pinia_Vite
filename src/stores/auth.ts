import { defineStore } from 'pinia';
// @vueuse/core is a utility library for Vue. useStorage creates a reactive reference that syncs with browser storage (localStorage or sessionStorage), 
// ensuring data persists across page reloads.
import { useStorage } from '@vueuse/core';
// Decodes the payload of a JWT to extract user information (such as user ID, roles) without validating the token’s signature.
import { jwtDecode } from 'jwt-decode';

export const useAuthStore = defineStore('auth', {
  // Defines the reactive state of the store using a factory function.
  state: () => ({
    token: useStorage<string | null>('token', null), // Persists in localStorage
    user: null,
  }),
  // Defines methods to modify the store’s state.
  actions: {
    setToken(token: string) {
      this.token = token;
      this.user = jwtDecode(token); // Decode JWT payload
    },
    logout() {
      this.token = null;
      this.user = null;
    },
  },
  // Defines computed properties that derive values from the store’s state.
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
});
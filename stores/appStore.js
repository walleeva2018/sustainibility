import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    language: '', // Default language as an empty string
  }),

  getters: {
    // Getter for accessing the language state
    getLanguage() {
      return this.language
    },
  },

  actions: {
    // Setter for updating the language state
    setLanguage(newLanguage) {
      this.language = newLanguage
    },
  },
})

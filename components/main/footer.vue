<script setup lang="ts">
import { useAppStore } from '~/stores/appStore.js'
import languages from '~/content/language.json'
import type { FooterData, SupportedLanguage } from '~/types/language'

const route = useRoute()

const path = computed(() => route.fullPath.replace('/', ''))

const footerData: FooterData = languages.footer

const appStore = useAppStore()

const selectedlanguage = useCookie< string >('language', {
  default: () => 'bn',
  path: '/',
})
</script>

<template>
  <div class="py-5 border-t dark:border-gray-800  mt-5 text-zinc-700 dark:text-zinc-300">
    <div class="px-6 container max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3">
        <FooterSite v-if="path === 'about'" />
        <FooterDevloper v-else />

        <FooterLink />
        <FooterConnect />
      </div>

      <div class="border-t dark:border-gray-800 mt-5 text-center p-2">
        {{ footerData.copyright[selectedlanguage ? selectedlanguage as SupportedLanguage : appStore.language as SupportedLanguage] }}
      </div>
    </div>
  </div>
</template>

<style>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: all 0.4s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>

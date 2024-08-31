<script lang="ts" setup>
useHead({
  title: 'Home',
  meta: [
    {
      name: 'description',
      content:
        'Championing leaders for a sustainable Philippines.',
    },
  ],
  titleTemplate: 'প্রারম্ভিক  - %s',
})

// Generate OG Image
defineOgImageComponent('About', {
  headline: 'Greetings 👋',
  title: 'SustainablePH ',
  description: 'Championing leaders for a sustainable Philippines.',
})
</script>
<template>
  <div class="dark:bg-slate-950 min-h-screen">
    <main class="container max-w-6xl mx-auto text-zinc-600">
      <MainHero />
      <MainRecent />
      <MainTrending />
    </main>
  </div>
</template>


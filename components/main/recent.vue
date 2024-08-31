<script lang="ts" setup>
// Get Last 6 Publish Post from the content/blog directory
import { toast } from 'vue3-toastify'

import { useAppStore } from '~/stores/appStore.js';


const { data } = await useAsyncData('recent-post', () =>
  queryContent('/blogs').limit(3).sort({ _id: -1 }).find(),
)

const selectedLanguage = useCookie<string>('language', {
  default: () => 'bn',
  path: '/',
})

const appStore = useAppStore()

useHead({
  title: 'Home',
  meta: [
    {
      name: 'description',
      content:
        'Welcome to praromvik here we teach about cloud native tools like Kubernetes,Docker, Helm, Prometheus and so on',
    },
  ],
  titleTemplate: 'Praromvik - %s',
})

function handleCourse()
{
  toast.info('Course Will Open Soon', { autoClose: 3000 })
}
</script>

<template>
  <div class="pb-10 px-4">
    <div class="flex flex-row items-center space-x-3 pt-5 pb-3">
      <Icon name="mdi:book" size="2em" class=" dark:text-zinc-300" />
      <h2 class="text-4xl font-semibold  dark:text-zinc-300   ">
        Our Courses
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <CourseCard
        title="Lead to Lead Sustainibility"
        description="How Sustainibility Can Help the society to bring change.We teach Leaders For Sustainibility"
        @click.prevent="handleCourse"
      />

      <template v-if="data?.length === 0">
        <BlogEmpty />
      </template>
    </div>
  </div>
</template>

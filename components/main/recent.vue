<script lang="ts" setup>
// Get Last 6 Publish Post from the content/blog directory
import { useAppStore } from '~/stores/appStore.js'
import languages from '~/content/language.json'
import type { Courses, SupportedLanguage } from '~/types/language'

const { data } = await useAsyncData('recent-post', () =>
  queryContent('/blogs').limit(3).sort({ _id: -1 }).find(),
)

const courseData: Courses = languages.courses
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
</script>

<template>
  <div class="pb-10 px-4">
    <div class="flex flex-row items-center space-x-3 pt-5 pb-3">
      <Icon name="mdi:book" size="2em" class="text-black dark:text-zinc-300" />
      <h2 class="text-4xl font-semibold text-black dark:text-zinc-300   ">
        {{ courseData.featured[selectedLanguage ? selectedLanguage as SupportedLanguage : appStore.language as SupportedLanguage] }}
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <CourseCard
        path="/"
        title="Kubernetes Basic to Advance"
        description="Kubernetes is JOss"
      />

      <template v-if="data?.length === 0">
        <BlogEmpty />
      </template>
    </div>
  </div>
</template>

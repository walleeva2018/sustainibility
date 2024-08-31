<script setup lang="ts">
import {  withDefaults } from 'vue'

// Define interface for props
interface Props {
  path?: string
  title: string
  instructor?: string
  description: string
  image?: string
  alt?: string
  tags?: Array<string>
  startDate?: string
  studentNumbers?: number
  price?: number
  moderators?: Array<string>
}

// Define props with default values
withDefaults(defineProps<Props>(), {
  path: '/',
  title: 'No Title',
  instructor: 'Toffe',
  description: 'No Description',
  image: '/default-course-image.jpg',
  alt: 'No Alt Text',
  tags: () => ['kubernetes'],
  startDate: 'No Start Date',
  studentNumbers: 20,
  price: 10000,
  moderators: () => [],
})
</script>

<template>
  <article class="group border dark:border-gray-800 m-2 overflow-hidden rounded-2xl shadow-sm text-zinc-700 dark:text-zinc-300">
    <NuxtLink :to="path">
      <NuxtImg
        class="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-2xl shadow-lg group-hover:scale-[1.02] transition-all duration-500"
        src="https://sustainableph.org/wp-content/uploads/2024/08/2-2048x1152.png"
         :alt="alt"
      />
      <div class="px-3 pb-4">
        <div class=" dark:text-zinc-300 pt-3 pb-2">
          <!-- Course Title using props.title -->
          <h2 class="text-xl font-semibold pb-1 group-hover:text-sky-700 dark:group-hover:text-sky-400">
            {{ title }}  <!-- Using props.title -->
          </h2>
          <!-- Instructor using props.instructor -->
          <div class="flex items-center mb-2">
            <span>Instructor: {{ instructor }}</span>  <!-- Using props.instructor -->
          </div>
          <!-- Course Details -->
          <div class="flex flex-wrap items-center gap-1">
            <div class="flex items-center gap-1">
              <LogoTag />
              <span>{{ price }} USD</span>
            </div>
            <div class="flex items-center gap-1">
              <Icon name="mdi:account" size="2em" class="text-black dark:text-zinc-300 dark:bg-white m-2" />
              <span> {{ studentNumbers }}</span>
            </div>
          </div>
          <!-- Date -->
          <div class="flex items-center mb-2">
            <Icon name="mdi:calendar" size="1.5em" class="text-black dark:text-zinc-300  dark:bg-white m-2"  />
            <span> Coming Soon</span> <!-- Assuming date is a prop -->
          </div>
        </div>
        <!-- Description using props.description -->
        <p class="text-ellipsis line-clamp-2 text-base">
          {{ description }}  <!-- Using props.description -->
        </p>
        <!-- Read More Link -->
        <div class="flex group-hover:underline text-sky-700 dark:text-sky-400 items-center py-2">
          <button>Enroll</button>
          <LogoArrow />
        </div>
      </div>
    </NuxtLink>
  </article>
</template>

  <style scoped>
  /* Add your custom styles here */
  </style>

<script setup lang="ts">
const router = useRouter()
const route = useRoute()
const courseName = route.params.course
const contentTable = [{
  id: 0,
  title: 'First',
  time: '3min',
  url: 'https://www.youtube.com/embed/3Bkzl4AIXvc?si=wtMeav-GBoCM0V7n',
  completed: true,

}, {
  id: 1,
  title: 'Second',
  time: '5min',
  url: 'https://www.youtube.com/embed/fFcHnlCw3nI?si=GFHvyGy5lGPuBY8l',
  completed: true,

}, {
  id: 2,
  title: 'Third',
  time: '10min',
  url: 'https://www.youtube.com/embed/R0ksvPPrQkg?si=inj3D1E2pPj-Tafe',
  completed: true,
}, {
  id: 2,
  title: 'Third',
  time: '10min',
  url: 'https://www.youtube.com/embed/R0ksvPPrQkg?si=inj3D1E2pPj-Tafe',
  completed: true,
}, {
  id: 2,
  title: 'Third',
  time: '10min',
  url: 'https://www.youtube.com/embed/R0ksvPPrQkg?si=inj3D1E2pPj-Tafe',
  completed: true,
},
]
</script>

<template>
  <div class="px-2 py-5 sm:py-9 max-w-6xl mt-10 mx-auto">
    <div class="one flex justify-center">
      <img src="https://miro.medium.com/v2/resize:fit:1024/1*V8JWIC-tqYQkS1b1edsu3w.png">
    </div>
    <div class="container mx-auto p-4 sm:grid sm:grid-cols-3 sm:gap-4">
      <div class="three sm:col-span-2">
        <div class="title mb-4">
          <h1 class="text-3xl font-bold">
            {{ courseName }}
          </h1>
        </div>
        <div class="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eaque libero maxime accusantium dolorum repellat dolor minima cumque unde numquam, asperiores, reiciendis, ad necessitatibus officiis similique perspiciatis dolore temporibus sed?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eaque libero maxime accusantium dolorum repellat dolor minima cumque unde numquam, asperiores, reiciendis, ad necessitatibus officiis similique perspiciatis dolore temporibus sed?
        </div>
      </div>
      <!-- @TODO : Toggle button & mobile responsive  -->
      <div class="four hidden sm:block border border-gray-300 rounded-lg p-3 mb-3">
        <p class="font-semibold mb-2">
          Table Of Content
        </p>
        <div v-for="content in contentTable" :key="content.id" @click="router.push(`${courseName}/${content.title}`)">
          <div class="flex items-center mb-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="fill-current text-gray-600">
              <path d="m9.5 16.5l7-4.5l-7-4.5zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22" />
            </svg>
            <div class="ml-2">
              <p>{{ content.title }}</p>
              <p class="text-sm text-gray-500">
                {{ content.time }}
              </p>
            </div>
          </div>
          <hr class="mb-2">
        </div>
      </div>
    </div>
  </div>
</template>

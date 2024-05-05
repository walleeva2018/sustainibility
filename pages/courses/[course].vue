<script setup lang="ts">
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
}]
const selecedId = ref(0)
const selectedVideoUrl = ref(contentTable[selecedId.value].url)
const selecedVideTitle = ref(contentTable[selecedId.value].title)

function changeVideo(id: number) {
  selecedId.value = id
  selecedVideTitle.value = contentTable[id].title
  selectedVideoUrl.value = contentTable[id].url
}
function prevNextButton(id: number) {
  changeVideo(id)
}
</script>

<template>
  <div class="sm:grid grid-cols-8 px-6 py-5 sm:py-9 gap-5 container max-w-6xl mt-16 mx-auto">
    <div class="one sm:col-span-6">
      <iframe
        class="w-full h-96"
        :src="selectedVideoUrl"
        :title="selecedVideTitle"
        frameborder="0"
        allowfullscreen
      />
      <div class="flex justify-between mb-20">
        <button :disabled="selecedId === 0" @click="prevNextButton(selecedId - 1)">
          Prev
        </button>
        <button :disabled="selecedId === contentTable.length - 1" @click="prevNextButton(selecedId + 1)">
          Next
        </button>
      </div>
      <p class="font-bold text-5xl">
        {{ selecedVideTitle }}
      </p>
      <hr>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nemo rem iure iusto praesentium cupiditate earum cumque aspernatur asperiores nisi vitae rerum explicabo provident magnam consectetur, assumenda a dolor perspiciatis.</p>
    </div>
    <div class="two sm:col-span-2 border border-gray-300 rounded-lg p-3 mb-3">
      <p>Table Of Content</p>
      <div v-for="content in contentTable" :key="content.id" @click="changeVideo(content.id)">
        <div class="flex items-center">
          <svg v-if="selecedId === content.id" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="fill-current text-gray-600">
            <path d="m9.5 16.5l7-4.5l-7-4.5zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m9.5 16.5l7-4.5l-7-4.5zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8" /></svg>
          <div class="ml-2">
            <p>{{ content.title }}</p>
            <p class="text-sm text-gray-500">
              {{ content.time }}
            </p>
          </div>
        </div>
        <hr>
      </div>
    </div>
  </div>
</template>

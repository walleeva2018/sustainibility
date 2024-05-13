<template>
    <div class="question-container">
      <div class="question">
        <p>{{ questions[currentIndex] }}</p>
      </div>
      <div class="options">
        <div v-for="(option, index) in options" :key="index" :class="{ 'option': true, 'selected': option === selectedOption }" @click="selectOption(option)">
          <input type="radio" :id="'option'+index" :value="option" v-model="selectedOption" />
          <label :for="'option'+index">{{ option }}</label>
        </div>
      </div>
      <div class="button-container">
          <button v-if="currentIndex!==0" class="bg-sky-700 rounded-xl text-white py-3 px-6 hover:scale-105 duration-300" @click="prevQuestion" :disabled="currentIndex === 0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M14 8a.75.75 0 0 1-.75.75H4.56l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 1.06L4.56 7.25h8.69A.75.75 0 0 1 14 8" clip-rule="evenodd"/></svg>Prev</button>
          <button v-if="currentIndex!==questions.length-1" class="bg-sky-700 rounded-xl text-white py-3 px-6 hover:scale-105 duration-300" @click="nextQuestion" :disabled="currentIndex === questions.length - 1">Next <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20"><path fill="currentColor" fill-rule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10" clip-rule="evenodd"/></svg></button>
          <button v-if="currentIndex===questions.length-1" type="submit" class="bg-sky-700 rounded-xl text-white py-2 hover:scale-105 duration-300" >
           Submit 
 
          </button>
        </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const currentIndex = ref(0);
  const selectedOption = ref<string | null>(null);
  const questions = ref<string[]>(['What is your favorite color?', 'What is the capital of France?', 'What is the tallest mountain on Earth?']);
  const options = ref<string[]>(['Red', 'Green', 'Blue', 'Yellow']);
  
  const question = () => questions.value[currentIndex.value];
  
  const nextQuestion = () => {
    if (currentIndex.value < questions.value.length - 1) {
      currentIndex.value++;
      selectedOption.value = null; 
    }
  };
  
  const prevQuestion = () => {
    if (currentIndex.value > 0) {
      currentIndex.value--;
      selectedOption.value = null; 
    }
  };
  
  const selectOption = (option: string) => {
    selectedOption.value = option;
  };
  </script>
  
  <style scoped>
  .question-container {
    max-width: 600px;
    margin: auto;
    margin-top: 60px;
    padding: 20px;
  }
  
  .question {
    margin-bottom: 20px;
  }
  
  .options {
    display: flex;
    flex-direction: column;
  }
  
  .option {
    margin-bottom: 10px;
    background-color: #0369A1;
    padding: 10px;
    cursor: pointer; 
  }
  
  .option:hover {
    background-color: #075985; 
  }
  
  .option input[type="radio"] {
    display: none; 
  }
  
  .option label {
    cursor: pointer; 
  }
  
  .selected {
    background-color: #075985; 
    border: #0bbd32;
    border-style: solid;
  }
  
  .button-container {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  
  @media (max-width: 768px) {
    .question-container {
      padding: 10px;
    }
  }
  </style>
  
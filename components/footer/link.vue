<template>
  <div class="flex flex-col dark:text-zinc-300   my-5 md:my-0 md:justify-self-center">
    <p class="text-black dark:text-zinc-300  text-base font-semibold">
      লিঙ্ক সমূহ
    </p>
    <NuxtLink to="/" class="hover:underline">
      হোম
    </NuxtLink>
    <NuxtLink to="/courses" class="hover:underline">
      কোর্স সমূহ
    </NuxtLink>
    <NuxtLink to="/certify" class="hover:underline">
      সার্টিফিকেশন পরীক্ষা
    </NuxtLink>
    <NuxtLink to="/about" class="hover:underline">
      আমাদের সম্পর্কে
    </NuxtLink>
  </div>
</template>

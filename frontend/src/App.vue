<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="">
    <div class="max-w-7xl mx-auto">
      <nav class="p-2">
        <RouterLink to="/" class="
          px-4
          py-2 
          mr-4 
          bg-neutral-700 
          hover:bg-neutral-800 
          rounded 
          text-white 
          font-semibold
          "
         >Home</RouterLink>
        <RouterLink to="/students" class="
           px-4
          py-2 
          mr-4 
          bg-neutral-700 
          hover:bg-neutral-800 
          rounded 
          text-white 
          font-semibold
          "
        >Students</RouterLink>
      </nav>
    </div>
  </header>
  <main class="max-w-7xl mx-auto min-w-screen">
    <RouterView />
  </main>
</template>


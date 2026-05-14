<template>
  <div class="min-h-screen flex flex-col bg-gray-50 text-gray-800 font-sans">
    
    <PublicNavbar />

    <main class="flex-grow flex flex-col">
      
      <div v-if="isLoading" class="flex-grow flex flex-col items-center justify-center min-h-[60vh]">
        <svg class="animate-spin h-16 w-16 text-purple-600 mb-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <h2 class="text-2xl font-bold text-gray-800 tracking-tight animate-pulse">
          Initializing Resources...
        </h2>
        <p class="text-gray-500 mt-2">Please wait while we load the content.</p>
      </div>

      <div v-else class="flex-grow">
        <slot />
      </div>

    </main>

    <PublicFooter />
    
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import PublicNavbar from '../components/PublicNavbar.vue'
import PublicFooter from '../components/PublicFooter.vue'

// 1. Define the loading state globally for the layout
const isLoading = ref(true)

// 2. Simulate or handle global resource loading on mount
onMounted(() => {
  // Replace this setTimeout with global API calls if needed 
  // (e.g., checking user authentication, fetching global site settings)
  setTimeout(() => {
    isLoading.value = false
  }, 1500)
})
</script>
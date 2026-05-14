<template>
  <header class="bg-gad-dark shadow-md sticky top-0 z-50">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      
      <div class="flex items-center gap-1">
        <div class="w-10 h-10 flex items-center justify-center flex-shrink-0">
          <DSWDLogoWhite />
        </div>
        <div class="w-15 h-15 flex items-center justify-center flex-shrink-0">
          <BPWhite />
        </div>
        
        <div class="flex flex-col leading-tight">
          <span class="text-sm md:text-lg font-bold text-white">Administrative Service</span>
          <span class="text-xs font-bold text-orange-300">Gender and Development Information Hub</span>
        </div>
      </div>
      
      <nav class="hidden md:flex items-center gap-6 font-medium text-gray-200">
        <a href="#" class="text-white border-b-2 border-gad-accent pb-1">Home</a>
        <a href="#" class="hover:text-white transition-colors duration-200">About GAD</a>
        <a href="#" class="hover:text-white transition-colors duration-200">Resources</a>
        <a href="#" class="hover:text-white transition-colors duration-200">Events</a>
        <a href="#" class="hover:text-white transition-colors duration-200">Contact</a>
      </nav>
      
      <button 
        @click="toggleMobileMenu" 
        class="md:hidden text-white focus:outline-none p-2 rounded-md hover:bg-gad-primary transition"
        aria-label="Toggle menu"
      >
        <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>

    <div v-show="isMobileMenuOpen" class="md:hidden bg-gad-primary border-t border-purple-700 shadow-xl absolute w-full">
      <nav class="flex flex-col px-4 pt-2 pb-6 space-y-2 font-medium text-gray-100">
        <a href="#" class="text-white bg-gad-dark px-4 py-3 rounded-lg">Home</a>
        <a href="#" class="hover:bg-gad-dark hover:text-white px-4 py-3 rounded-lg transition">About GAD</a>
        <a href="#" class="hover:bg-gad-dark hover:text-white px-4 py-3 rounded-lg transition">Resources</a>
        <a href="#" class="hover:bg-gad-dark hover:text-white px-4 py-3 rounded-lg transition">Events</a>
        <a href="#" class="hover:bg-gad-dark hover:text-white px-4 py-3 rounded-lg transition">Contact</a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import DSWDLogoWhite from './DSWDLogoWhite.vue';
import BPWhite from './BPWhite.vue';

// State to track if the mobile menu is open or closed
const isMobileMenuOpen = ref(false);

// Function to toggle the state when the hamburger button is clicked
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>
<template>
  <div class="flex h-screen bg-gray-100 font-sans text-gray-900 overflow-hidden">
    
    <aside class="w-64 bg-gray-900 text-white hidden md:flex flex-col shadow-xl z-20">
      <div class="h-16 flex items-center px-6 font-bold text-lg border-b border-gray-800 text-purple-400">
        GAD Admin Panel
      </div>
      <nav class="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        <a href="#" class="flex items-center gap-3 px-4 py-3 rounded-lg bg-purple-600 text-white transition">
          Dashboard
        </a>
        <a href="#" class="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition">
          Manage Users
        </a>
        <a href="#" class="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition">
          Incident Reports
        </a>
        <a href="#" class="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition">
          Content/Articles
        </a>
        <a href="#" class="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition mt-auto">
          Settings
        </a>
      </nav>
    </aside>

    <div class="flex-1 flex flex-col min-w-0">
      
      <header class="h-16 bg-white shadow-sm flex items-center justify-between px-6 z-10">
        <button class="md:hidden text-gray-600 p-2 focus:outline-none rounded-md hover:bg-gray-100">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        
        <div class="font-semibold text-gray-800 hidden md:block">Overview</div>

        <div class="flex items-center gap-4 ml-auto">
          <span class="text-sm font-medium text-gray-600 hidden sm:block">Administrator</span>
          <div class="w-9 h-9 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center font-bold border border-purple-200 cursor-pointer hover:bg-purple-200 transition">
            A
          </div>
        </div>
      </header>

      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6 md:p-8">
        <div class="max-w-7xl mx-auto">
          <slot />
        </div>
      </main>

    </div>
  </div>
</template>

<script setup>
// Admin layout logic (e.g., toggling the mobile sidebar)
</script>
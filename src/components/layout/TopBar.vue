<script setup lang="ts">
import { ref } from 'vue'
import NotificationsDropdown from '../widgets/NotificationsDropdown.vue'

const showMobileMenu = ref(false)
const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}
</script>

<template>
  <header class="bg-white border-b border-gray-200 sticky top-0 z-10">
    <div class="px-4 md:px-6 py-3 flex justify-between items-center">
      <div class="flex lg:hidden">
        <button 
          @click="toggleMobileMenu" 
          class="text-gray-500 focus:outline-none"
        >
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      
      <div class="flex items-center md:hidden">
        <img src="https://www.clonline.org/storage_files/43427/papacolombia-logo-o.jpg" alt="Logo" class="h-8 w-8 rounded-full bg-white p-1" />
        <h1 class="ml-2 text-sm font-bold">Farmacia Comunitaria</h1>
      </div>
      
      <div class="hidden md:flex items-center">
        <div class="relative">
          <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
            </svg>
          </span>
          <input 
            type="text" 
            placeholder="Buscar..." 
            class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 w-64"
          >
        </div>
      </div>
      
      <div class="flex items-center space-x-4">
        <NotificationsDropdown />
        
        <div class="relative">
          <button class="flex items-center">
            <img 
              src="https://img.freepik.com/premium-photo/meteorologist-digital-avatar-generative-ai_934475-9355.jpg" 
              alt="Avatar" 
              class="h-8 w-8 rounded-full border-2 border-primary-500" 
            />
            <span class="hidden md:block ml-2 text-sm font-medium">Kenneth</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
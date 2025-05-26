<script setup lang="ts">
import { ref } from 'vue'

const showNotifications = ref(false)
const toggleNotifications = () => {
  showNotifications.value = !showNotifications.value
}

const notifications = [
  {
    id: 1,
    type: 'warning',
    title: 'Stock bajo',
    message: 'Paracetamol 500mg está por agotarse (5 unidades restantes)',
    time: '10 min'
  },
  {
    id: 2,
    type: 'danger',
    title: 'Medicamento por vencer',
    message: 'Amoxicilina 250mg vence en 7 días',
    time: '1 hora'
  },
  {
    id: 3,
    type: 'info',
    title: 'Nuevo cliente registrado',
    message: 'Se ha registrado el cliente Juan Pérez',
    time: '3 horas'
  }
]
</script>

<template>
  <div class="relative">
    <button 
      @click="toggleNotifications"
      class="p-1 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none relative"
    >
      <span class="absolute top-0 right-0 h-2 w-2 rounded-full bg-danger-500"></span>
      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2" 
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" 
        />
      </svg>
    </button>
    
    <div 
      v-if="showNotifications"
      class="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
    >
      <div class="py-1">
        <div class="px-4 py-2 border-b border-gray-200">
          <h3 class="text-sm font-medium">Notificaciones</h3>
        </div>
        
        <div class="max-h-64 overflow-y-auto">
          <div 
            v-for="notification in notifications" 
            :key="notification.id"
            class="px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
          >
            <div class="flex items-start">
              <div :class="{
                'bg-warning-100': notification.type === 'warning',
                'bg-danger-100': notification.type === 'danger',
                'bg-primary-100': notification.type === 'info'
              }" class="flex-shrink-0 rounded-full p-1 mr-3">
                <svg class="h-5 w-5" :class="{
                  'text-warning-600': notification.type === 'warning',
                  'text-danger-600': notification.type === 'danger',
                  'text-primary-600': notification.type === 'info'
                }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path v-if="notification.type === 'warning'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  <path v-if="notification.type === 'danger'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path v-if="notification.type === 'info'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-900">{{ notification.title }}</p>
                <p class="text-xs text-gray-500">{{ notification.message }}</p>
                <p class="text-xs text-gray-400 mt-1">{{ notification.time }}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="px-4 py-2 border-t border-gray-200">
          <a href="#" class="text-xs text-primary-600 hover:text-primary-800 font-medium">Ver todas las notificaciones</a>
        </div>
      </div>
    </div>
  </div>
</template>
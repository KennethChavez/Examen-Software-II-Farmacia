<script setup lang="ts">
import { ref } from 'vue'

const lowStockItems = ref([
  {
    id: 1,
    name: 'Paracetamol 500mg',
    category: 'Analgésicos',
    stock: 5,
    minStock: 10,
    critical: true
  },
  {
    id: 2,
    name: 'Amoxicilina 250mg',
    category: 'Antibióticos',
    stock: 8,
    minStock: 15,
    critical: false
  },
  {
    id: 3,
    name: 'Ibuprofeno 400mg',
    category: 'Antiinflamatorios',
    stock: 6,
    minStock: 12,
    critical: true
  },
  {
    id: 4,
    name: 'Loratadina 10mg',
    category: 'Antialérgicos',
    stock: 7,
    minStock: 10,
    critical: false
  }
])
</script>

<template>
  <div class="bg-white rounded-lg shadow-card overflow-hidden">
    <div class="px-4 py-3 bg-warning-500 text-white flex justify-between items-center">
      <h3 class="font-medium">Alerta de Stock Bajo</h3>
      <button class="text-warning-200 hover:text-white text-sm">
        Ver todos
      </button>
    </div>
    
    <ul class="divide-y divide-gray-200">
      <li v-for="item in lowStockItems" :key="item.id" class="hover:bg-gray-50">
        <div class="px-4 py-3 flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-900">{{ item.name }}</p>
            <p class="text-xs text-gray-500">{{ item.category }}</p>
          </div>
          <div class="flex items-center">
            <span 
              :class="{
                'bg-danger-100 text-danger-800': item.critical,
                'bg-warning-100 text-warning-800': !item.critical
              }" 
              class="px-2 py-0.5 rounded-full text-xs font-medium"
            >
              {{ item.stock }} / {{ item.minStock }}
            </span>
            <button class="ml-4 text-primary-600 hover:text-primary-800">
              <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>
        </div>
      </li>
    </ul>
    
    <div class="px-4 py-3 bg-gray-50 text-sm text-center">
      <button class="text-primary-600 hover:text-primary-800 font-medium">
        Pedir reabastecimiento
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'

const currentNumber = ref(25)
const waitingNumbers = ref(['B013', 'B012', 'B010', 'B010'])
const highlightedNumber = ref('B013')

// Simulate queue updates
onMounted(() => {
  const interval = setInterval(() => {
    if (Math.random() > 0.7) {
      currentNumber.value++
      waitingNumbers.value.pop()
      waitingNumbers.value.unshift(`B${(10 + Math.floor(Math.random() * 10)).toString().padStart(3, '0')}`)
    }
  }, 8000)
})
</script>

<template>
  <div class="bg-white rounded-lg shadow-card overflow-hidden">
    <div class="bg-primary-700 text-white px-4 py-3">
      <h3 class="font-medium">Panel de Atención</h3>
    </div>
    
    <div class="flex flex-col md:flex-row">
      <div class="flex-1 p-4 border-b md:border-b-0 md:border-r border-gray-200">
        <h4 class="text-sm text-gray-500 font-medium mb-2">Turno Actual</h4>
        <div class="bg-gray-100 p-5 rounded-lg flex flex-col items-center justify-center">
          <span class="text-5xl font-bold text-primary-700">{{ currentNumber }}</span>
          <span class="text-sm text-gray-500 mt-2">Ventanilla 2</span>
        </div>
      </div>
      
      <div class="flex-1 p-4">
        <h4 class="text-sm text-gray-500 font-medium mb-2">En Espera</h4>
        <div class="bg-primary-800 text-white rounded-lg overflow-hidden">
          <ul>
            <li 
              v-for="(number, index) in waitingNumbers" 
              :key="index"
              :class="[
                'px-4 py-2 border-b border-primary-700 last:border-b-0',
                number === highlightedNumber ? 'bg-warning-400 text-primary-900 font-bold' : ''
              ]"
            >
              {{ number }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="border-t border-gray-200 px-4 py-3 bg-gray-50 flex justify-between items-center text-sm">
      <div class="flex items-center">
        <svg class="h-4 w-4 text-primary-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>Actualizado automáticamente</span>
      </div>
      <button class="text-primary-600 hover:text-primary-800 font-medium">
        Ver panel completo
      </button>
    </div>
  </div>
</template>
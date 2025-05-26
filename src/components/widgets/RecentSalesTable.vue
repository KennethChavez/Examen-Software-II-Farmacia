<script setup lang="ts">
import { ref } from 'vue'

const recentSales = ref([
  { 
    id: 'V-1025', 
    client: 'María González', 
    items: 3, 
    amount: '$47.50', 
    date: '10:25 AM', 
    status: 'completed' 
  },
  { 
    id: 'V-1024', 
    client: 'Juan Pérez', 
    items: 5, 
    amount: '$124.75', 
    date: '9:15 AM', 
    status: 'completed' 
  },
  { 
    id: 'V-1023', 
    client: 'Rosa Martínez', 
    items: 2, 
    amount: '$35.00', 
    date: '8:45 AM', 
    status: 'completed' 
  },
  { 
    id: 'V-1022', 
    client: 'Carlos López', 
    items: 7, 
    amount: '$213.80', 
    date: 'Ayer', 
    status: 'completed' 
  },
  { 
    id: 'V-1021', 
    client: 'Ana Díaz', 
    items: 1, 
    amount: '$18.25', 
    date: 'Ayer', 
    status: 'completed' 
  }
])
</script>

<template>
  <div class="bg-white rounded-lg shadow-card overflow-hidden">
    <div class="px-4 py-3 bg-primary-700 text-white flex justify-between items-center">
      <h3 class="font-medium">Ventas Recientes</h3>
      <button class="text-primary-200 hover:text-white text-sm">
        Ver todas
      </button>
    </div>
    
    <div class="overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Cliente
            </th>
            <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Productos
            </th>
            <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Total
            </th>
            <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Fecha
            </th>
            <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Estado
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="sale in recentSales" :key="sale.id" class="hover:bg-gray-50">
            <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-primary-600">
              {{ sale.id }}
            </td>
            <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
              {{ sale.client }}
            </td>
            <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
              {{ sale.items }} items
            </td>
            <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
              {{ sale.amount }}
            </td>
            <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
              {{ sale.date }}
            </td>
            <td class="px-4 py-3 whitespace-nowrap">
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-secondary-100 text-secondary-800">
                Completado
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Chart, LineElement, PointElement, LineController, CategoryScale, LinearScale, Tooltip, Title, Legend } from 'chart.js'
import { Line } from 'vue-chartjs'

Chart.register(LineElement, PointElement, LineController, CategoryScale, LinearScale, Tooltip, Title, Legend)

const chartData = ref({
  labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
  datasets: [
    {
      label: 'Ventas ($)',
      backgroundColor: 'rgba(28, 100, 242, 0.1)',
      borderColor: '#1C64F2',
      pointBackgroundColor: '#1C64F2',
      borderWidth: 2,
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#1C64F2',
      data: [1450, 1800, 1350, 1650, 2100, 2400, 1950]
    }
  ]
})

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  tension: 0.3,
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        display: true,
        color: 'rgba(0, 0, 0, 0.05)'
      }
    },
    x: {
      grid: {
        display: false
      }
    }
  },
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      backgroundColor: '#1E429F',
      titleFont: {
        size: 14
      },
      bodyFont: {
        size: 13
      },
      padding: 12,
      displayColors: false,
      callbacks: {
        label: function(context) {
          return `$${context.raw}`
        }
      }
    }
  }
})
</script>

<template>
  <div class="bg-white rounded-lg shadow-card overflow-hidden">
    <div class="px-4 py-3 bg-primary-700 text-white flex justify-between items-center">
      <h3 class="font-medium">Ventas Semanales</h3>
      <div class="flex space-x-2">
        <button class="text-primary-200 hover:text-white text-sm">Semana</button>
        <button class="text-white text-sm font-medium">Mes</button>
        <button class="text-primary-200 hover:text-white text-sm">Año</button>
      </div>
    </div>
    
    <div class="p-4">
      <div class="flex items-center justify-between mb-4">
        <div>
          <h4 class="text-xl font-bold text-gray-900">$11,700</h4>
          <p class="text-sm text-gray-500">Total semana actual</p>
        </div>
        <div class="text-secondary-600 text-sm font-medium flex items-center">
          <svg class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          12.5% vs semana anterior
        </div>
      </div>
      
      <div class="h-60">
        <Line :data="chartData" :options="chartOptions" />
      </div>
    </div>
  </div>
</template>
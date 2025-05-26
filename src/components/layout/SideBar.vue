<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const currentRoute = computed(() => route.name)

const navItems = [
  { name: 'dashboard', path: '/', icon: 'home', label: 'Dashboard' },
  { name: 'inventory', path: '/inventory', icon: 'box', label: 'Inventario' },
  { name: 'clients', path: '/clients', icon: 'users', label: 'Clientes' },
  { name: 'sales', path: '/sales', icon: 'shopping-cart', label: 'Ventas' },
  { name: 'history', path: '/history', icon: 'clock', label: 'Historial' },
  { name: 'reports', path: '/reports', icon: 'chart-bar', label: 'Reportes' }
]

const goTo = (path: string) => {
  router.push(path)
}
</script>

<template>
  <aside class="bg-primary-800 text-white w-16 md:w-64 hidden md:flex flex-col">
    <div class="p-4 flex items-center justify-center md:justify-start">
      <img src="https://www.clonline.org/storage_files/43427/papacolombia-logo-o.jpg" alt="Logo" class="h-10 w-10 rounded-full bg-white p-1" />
      <div class="hidden md:block ml-3">
        <h1 class="text-lg font-bold leading-5">Farmacia Comunitaria</h1>
        <p class="text-xs text-primary-200">La Bendición del Papa Francisco</p>
      </div>
    </div>
    <nav class="mt-6 flex-1">
      <ul class="space-y-2 px-2">
        <li v-for="item in navItems" :key="item.name">
          <button
            @click="goTo(item.path)"
            :class="[
              'flex items-center w-full p-3 rounded-lg transition-colors',
              currentRoute === item.name
                ? 'bg-primary-700 text-white'
                : 'text-primary-200 hover:bg-primary-700 hover:text-white'
            ]"
          >
            <span class="material-icons-outlined">{{ item.icon }}</span>
            <span class="ml-3 hidden md:block">{{ item.label }}</span>
          </button>
        </li>
      </ul>
    </nav>
    <div class="p-4">
      <div class="hidden md:block py-4 border-t border-primary-700">
        <p class="text-xs text-primary-300 text-center mb-2">Examen de clase: Ing. Software II</p>
        <p class="text-xs text-primary-300 text-center mb-2">Fecha de entrega: 25 de mayo de 2025</p>
        <p class="text-xs text-primary-300 text-center mb-2">Catedratico: Ing. Mario Nones | Master IA</p>
        <p class="text-xs text-primary-300 text-center mb-2">Alumno: Kenneth Chávez</p>
        <p class="text-xs text-primary-300 text-center mb-2">Cuenta: 61411865</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/8d/CEUTEC_HONDURAS.png" alt="CEUTEC Logo" class="h-8 mx-auto mt-2" />
      </div>
    </div>
  </aside>
</template>
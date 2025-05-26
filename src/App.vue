<script setup lang="ts">
import SideBar from './components/layout/SideBar.vue'
import TopBar from './components/layout/TopBar.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex">
    <SideBar />
    <div class="flex-1 flex flex-col overflow-hidden">
      <TopBar />
      <main class="flex-1 overflow-y-auto p-4 md:p-6">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
    </div>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
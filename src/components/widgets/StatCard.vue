<script setup lang="ts">
defineProps<{
  title: string;
  value: string | number;
  subtitle?: string;
  change?: string;
  changeType?: 'up' | 'down' | 'neutral';
  icon?: string;
  color?: 'primary' | 'secondary' | 'warning' | 'danger';
}>()

const formatCurrency = (value: string | number): string => {
  if (typeof value === 'string' && value.startsWith('L')) {
    return value;
  }
  return `L ${value}`;
}
</script>

<template>
  <div class="bg-white rounded-lg shadow-card overflow-hidden">
    <div class="p-4">
      <div class="flex justify-between items-start">
        <div>
          <h3 class="text-sm text-gray-500 font-medium">{{ title }}</h3>
          <div class="mt-1 flex items-baseline">
            <p class="text-2xl font-semibold text-gray-900">{{ value.toString().startsWith('L') ? value : formatCurrency(value) }}</p>
            <p v-if="subtitle" class="ml-1 text-sm text-gray-500">{{ subtitle }}</p>
          </div>
          <div v-if="change" class="mt-1">
            <span :class="{
              'text-secondary-600': changeType === 'up',
              'text-danger-600': changeType === 'down',
              'text-gray-500': changeType === 'neutral',
            }" class="text-xs font-medium flex items-center">
              <svg v-if="changeType === 'up'" class="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <svg v-if="changeType === 'down'" class="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              {{ change }}
            </span>
          </div>
        </div>
        <div :class="{
          'bg-primary-100': color === 'primary' || !color,
          'bg-secondary-100': color === 'secondary',
          'bg-warning-100': color === 'warning',
          'bg-danger-100': color === 'danger',
        }" class="p-2 rounded-lg">
          <svg :class="{
            'text-primary-600': color === 'primary' || !color,
            'text-secondary-600': color === 'secondary',
            'text-warning-600': color === 'warning',
            'text-danger-600': color === 'danger',
          }" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="icon === 'cash'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            <path v-else-if="icon === 'medicine'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            <path v-else-if="icon === 'user'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            <path v-else-if="icon === 'alert'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
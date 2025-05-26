<script setup lang="ts">
import StatCard from '../components/widgets/StatCard.vue'
import QueueDisplay from '../components/widgets/QueueDisplay.vue'
import RecentSalesTable from '../components/widgets/RecentSalesTable.vue'
import LowStockAlert from '../components/widgets/LowStockAlert.vue'
import SalesChart from '../components/widgets/SalesChart.vue'
</script>

<template>
  <div>
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-gray-900">Dashboard</h1>
      <p class="text-gray-500">Bienvenido a la Farmacia Comunitaria "La Bendición del Papa Francisco"</p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <StatCard 
        title="Ventas Hoy" 
        value="L 18,560.25" 
        change="+12.5% vs ayer" 
        changeType="up" 
        icon="cash"
        color="primary"
      />
      <StatCard 
        title="Clientes Atendidos" 
        value="42" 
        subtitle="personas" 
        change="+8% vs ayer" 
        changeType="up" 
        icon="user"
        color="secondary"
      />
      <StatCard 
        title="Stock Crítico" 
        value="6" 
        subtitle="productos" 
        change="+2 desde ayer" 
        changeType="down" 
        icon="alert"
        color="warning"
      />
      <StatCard 
        title="Por Vencer" 
        value="3" 
        subtitle="productos" 
        change="Sin cambios" 
        changeType="neutral" 
        icon="medicine"
        color="danger"
      />
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
      <SalesChart class="lg:col-span-2" />
      <QueueDisplay />
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <RecentSalesTable class="lg:col-span-2" />
      <LowStockAlert />
    </div>
  </div>
</template>
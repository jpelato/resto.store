<script setup>
import HistoryLog from '@/views/pages/inventory/HistoryLog.vue'
import StockIn from '@/views/pages/inventory/Inventory.vue'
import {
  useRoute,
} from 'vue-router'

const route = useRoute()
const activeTab = ref(route.params.tab)


// tabs
const tabs = [{
  title: 'Inventory',
  icon: 'bx-list-plus',
  tab: 'inventory',
}, {
  title: 'History Log',
  icon: 'bx-spreadsheet',
  tab: 'history-log',
} ]
</script>

<template>
  <div>
    <VTabs
      v-model="activeTab"
      show-arrows
    >
      <VTab
        v-for="item in tabs"
        :key="item.icon"
        :value="item.tab"
      >
        <VIcon
          size="20"
          start
          :icon="item.icon"
        />
        {{ item.title }}
      </VTab>
    </VTabs>
    <VDivider />
    <VWindow
      v-model="activeTab"
      class="mt-5 disable-tab-transition"
    >
      <!-- Account -->
      <VWindowItem value="inventory">
        <StockIn />
      </VWindowItem>
      <!-- Security -->
      <VWindowItem value="history-log">
        <HistoryLog />
      </VWindowItem>
    </VWindow>
  </div>
</template>

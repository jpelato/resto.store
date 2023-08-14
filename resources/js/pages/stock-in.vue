<script setup>
import HistoryLog from '@/views/pages/stock-in/HistoryLog.vue';
import StockIn from '@/views/pages/stock-in/StockIn.vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const activeTab = ref(route.params.tab)

// tabs
const tabs = [
  {
    title: 'Stock In',
    icon: 'bx-list-plus',
    tab: 'stock-in',
  },
  {
    title: 'History Log',
    icon: 'bx-spreadsheet',
    tab: 'history-log',
  },
]
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
      <VWindowItem value="stock-in">
        <StockIn />
      </VWindowItem>

      <!-- Security -->
      <VWindowItem value="history-log">
        <HistoryLog />
      </VWindowItem>
    </VWindow>
  </div>
</template>

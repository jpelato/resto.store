<script setup>
import Glossary from '@/views/pages/sales-entry/Glossary.vue'
import Restaurant from '@/views/pages/sales-entry/Restaurant.vue'
import SalesEntryNotification from '@/views/pages/sales-entry/SalesEntryNotification.vue'
import {
  useRoute,
} from 'vue-router'

const route = useRoute()
const activeTab = ref(route.params.tab)


// tabs
const tabs = [{
  title: 'Glossary',
  icon: 'uil:shop',
  tab: 'glossary',
}, {
  title: 'Restaurant',
  icon: 'material-symbols:food-bank',
  tab: 'restaurant',
}, {
  title: 'Sales Entry Notification',
  icon: 'bx-bell',
  tab: 'notification',
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
      <VWindowItem value="glossary">
        <Glossary />
      </VWindowItem>
      <!-- Security -->
      <VWindowItem value="restaurant">
        <Restaurant />
      </VWindowItem>
      <!-- Notification -->
      <VWindowItem value="notification">
        <SalesEntryNotification />
      </VWindowItem>
    </VWindow>
  </div>
</template>

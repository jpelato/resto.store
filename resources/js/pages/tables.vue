<script setup>
import DemoSimpleTableBasics from '@/views/pages/tables/DemoSimpleTableBasics.vue'
import DemoSimpleTableDensity from '@/views/pages/tables/DemoSimpleTableDensity.vue'
import DemoSimpleTableFixedHeader from '@/views/pages/tables/DemoSimpleTableFixedHeader.vue'
import DemoSimpleTableHeight from '@/views/pages/tables/DemoSimpleTableHeight.vue'
import DemoSimpleTableTheme from '@/views/pages/tables/DemoSimpleTableTheme.vue'
import BasicDataTables from '@/views/pages/tables/data-table/BasicDataTables.vue'
import FilteringDataTables from '@/views/pages/tables/data-table/FilteringDataTables.vue'
import GroupingDataTables from '@/views/pages/tables/data-table/GroupingDataTables.vue'
import HeadersDataTables from '@/views/pages/tables/data-table/HeadersDataTables.vue'
import PaginationDataTables from '@/views/pages/tables/data-table/PaginationDataTables.vue'
import SelectionDataTables from '@/views/pages/tables/data-table/SelectionDataTables.vue'
import ServerSideDataTables from '@/views/pages/tables/data-table/ServerSideDataTables.vue'
import SlotsDataTables from '@/views/pages/tables/data-table/SlotsDataTables.vue'
import SortingDataTables from '@/views/pages/tables/data-table/SortingDataTables.vue'
import VirtualDataTables from '@/views/pages/tables/data-table/VirtualDataTables.vue'
import VInfiniteScroll from '@/views/pages/infinite-scroll/VInfiniteScroll.vue'
</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard title="Basic">
        <DemoSimpleTableBasics />
      </VCard>
    </VCol>

    <VCol cols="12">
      <VCard title="Theme">
        <VCardText>
          use <code>theme</code> prop to switch table to the dark theme.
        </VCardText>
        <DemoSimpleTableTheme />
      </VCard>
    </VCol>

    <VCol cols="12">
      <VCard title="Density">
        <VCardText>
          You can show a dense version of the table by using the <code>density</code> prop.
        </VCardText>
        <DemoSimpleTableDensity />
      </VCard>
    </VCol>

    <VCol cols="12">
      <VCard title="Height">
        <VCardText>
          You can set the height of the table by using the <code>height</code> prop.
        </VCardText>
        <DemoSimpleTableHeight />
      </VCard>
    </VCol>

    <VCol cols="12">
      <VCard title="Fixed Header">
        <VCardText>
          You can fix the header of table by using the <code>fixed-header</code> prop.
        </VCardText>
        <DemoSimpleTableFixedHeader />
      </VCard>
    </VCol>
    <VCol cols="12">
      <VCard title="BasicDataTables">
        <VCardText>
          BasicDataTables .
        </VCardText>
        <BasicDataTables />
      </VCard>
    </VCol>
    <VCol cols="12">
      <VCard title="FilteringDataTables ">
        <VCardText>
          FilteringDataTables  Tables.
        </VCardText>
        <FilteringDataTables />
      </VCard>
    </VCol>
    <VCol cols="12">
      <VCard title="GroupingDataTables">
        <VCardText>
          GroupingDataTables Tables.
        </VCardText>
        <GroupingDataTables />
      </VCard>
    </VCol>

    <VCol cols="12">
      <VCard title="HeadersDataTables">
        <VCardText>
          HeadersDataTables Tables.
        </VCardText>
        <HeadersDataTables />
      </VCard>
    </VCol>
    <VCol cols="12">
      <VCard title="PaginationDataTables">
        <VCardText>
          PaginationDataTables Tables.
        </VCardText>
        <PaginationDataTables />
      </VCard>
    </VCol>
    <VCol cols="12">
      <VCard title="SelectionDataTables">
        <VCardText>
          SelectionDataTables Tables.
        </VCardText>
        <SelectionDataTables />
      </VCard>
    </VCol>
    <VCol cols="12">
      <VCard title="ServerSideDataTables ">
        <VCardText>
          ServerSideDataTables  Tables.
        </VCardText>
        <ServerSideDataTables />
      </VCard>
    </VCol>
    <VCol cols="12">
      <VCard title="SlotsDataTables ">
        <VCardText>
          SlotsDataTables  Tables.
        </VCardText>
        <SlotsDataTables />
      </VCard>
    </VCol>
    <VCol cols="12">
      <VCard title="SortingDataTables ">
        <VCardText>
          SortingDataTables  Tables.
        </VCardText>
        <SortingDataTables />
      </VCard>
    </VCol>
    <VCol cols="12">
      <VCard title="VirtualDataTables ">
        <VCardText>
          Virtual Tables.
        </VCardText>
        <VirtualDataTables />
      </VCard>
    </VCol>
    <VCol cols="12">
      <VCard title="v-infinite-scroll">
        <VCardText>
          v-infinite-scroll.
        </VCardText>
        <VInfiniteScroll />
      </VCard>
    </VCol>
  </VRow>
</template>

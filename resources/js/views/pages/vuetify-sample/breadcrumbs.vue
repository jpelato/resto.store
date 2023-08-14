<template>
  <VBreadcrumbs :items="items">
    <template #title="{ item }">
      {{ item.title.toUpperCase() }}
    </template>
  </VBreadcrumbs>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: 'Dashboard',
        disabled: false,
        href: 'breadcrumbs_dashboard',
      },
      {
        title: 'Link 1',
        disabled: false,
        href: 'breadcrumbs_link_1',
      },
      {
        title: 'Link 2',
        disabled: true,
        href: 'breadcrumbs_link_2',
      },
    ],
  }),
}
</script>

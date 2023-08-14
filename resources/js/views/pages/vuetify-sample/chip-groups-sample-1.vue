<template>
  <VRow justify="center">
    <VCol
      cols="12"
      sm="7"
      md="6"
      lg="5"
    >
      <VSheet
        elevation="10"
        rounded="xl"
      >
        <VSheet
          class="pa-3 bg-primary text-right"
          rounded="t-xl"
        >
          <VBtn icon>
            <VIcon>mdi-content-save-cog-outline</VIcon>
          </VBtn>

          <VBtn
            class="ms-2"
            icon
          >
            <VIcon>mdi-check-bold</VIcon>
          </VBtn>
        </VSheet>

        <div class="pa-4">
          <VChipGroup
            selected-class="text-primary"
            column
          >
            <VChip
              v-for="tag in tags"
              :key="tag"
            >
              {{ tag }}
            </VChip>
          </VChipGroup>
        </div>
      </VSheet>
    </VCol>
  </VRow>
</template>

<script>
export default {
  data: () => ({
    tags: [
      'Work',
      'Home Improvement',
      'Vacation',
      'Food',
      'Drawers',
      'Shopping',
      'Art',
      'Tech',
      'Creative Writing',
    ],
  }),
}
</script>

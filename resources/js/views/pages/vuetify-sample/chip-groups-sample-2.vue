<template>
  <VCard
    class="mx-auto"
    max-width="400"
  >
    <VCardTitle>
      <h2 class="text-h4">
        Toothbrush
      </h2>
      <VSpacer />
      <span class="text-h6">$4.99</span>
    </VCardTitle>

    <VCardText>
      Our company takes pride in making handmade brushes.
      Our toothbrushes are available in 4 different bristel types, from extra soft to hard.
    </VCardText>

    <VDivider class="mx-4" />

    <VCardText>
      <span class="subheading">Select type</span>

      <VChipGroup
        v-model="selection"
        selected-class="text-deep-purple-accent-4"
        mandatory
      >
        <VChip>Extra Soft</VChip>
        <VChip>Soft</VChip>
        <VChip>Medium</VChip>
        <VChip>Hard</VChip>
      </VChipGroup>
    </VCardText>

    <VCardActions>
      <VBtn
        block
        color="deep-purple-accent-4"
      >
        Add to Cart
      </VBtn>
    </VCardActions>
  </VCard>
</template>

<script>
export default {
  data: () => ({
    selection: 2,
  }),
}
</script>

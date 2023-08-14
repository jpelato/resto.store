<template>
  <VLayout
    class="overflow-visible"
    style="height: 56px;"
  >
    <VBottomNavigation
      v-model="value"
      :bg-color="color"
      mode="shift"
    >
      <VBtn>
        <VIcon>mdi-television-play</VIcon>

        <span>Video</span>
      </VBtn>

      <VBtn>
        <VIcon>mdi-music-note</VIcon>

        <span>Music</span>
      </VBtn>

      <VBtn>
        <VIcon>mdi-book</VIcon>

        <span>Book</span>
      </VBtn>

      <VBtn>
        <VIcon>mdi-image</VIcon>

        <span>Image</span>
      </VBtn>
    </VBottomNavigation>
  </VLayout>
</template>

<script>
export default {
  data: () => ({ value: 1 }),

  computed: {
    color () {
      switch (this.value) {
      case 0: return 'blue-grey'
      case 1: return 'teal'
      case 2: return 'brown'
      case 3: return 'indigo'
      default: return 'blue-grey'
      }
    },
  },
}
</script>

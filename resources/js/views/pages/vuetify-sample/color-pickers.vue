<template>
  <div class="d-flex justify-space-around">
    <VColorPicker
      v-model="c1"
      hide-canvas
      hide-sliders
    />

    <VColorPicker
      v-model="c2"
      hide-inputs
      show-swatches
    />
  </div>
</template>

<script>
export default {
  data: () => ({
    c1: '#ff00ff',
    c2: '#00ff00',
  }),
}
</script>

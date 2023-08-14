<template>
  <VCarousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows="hover"
  >
    <VCarouselItem
      v-for="(slide, i) in slides"
      :key="i"
    >
      <VSheet
        :color="colors[i]"
        height="100%"
      >
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-h2">
            {{ slide }} Slide
          </div>
        </div>
      </VSheet>
    </VCarouselItem>
  </VCarousel>
</template>

<script>
export default {
  data () {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
    }
  },
}
</script>

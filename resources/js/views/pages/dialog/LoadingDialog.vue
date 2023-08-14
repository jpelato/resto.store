<template>
  <div class="text-center">
    <VBtn
      :disabled="dialog"
      :loading="dialog"
      color="purple-darken-2"
      @click="dialog = true"
    >
      Start loading
    </VBtn>
    <VDialog
      v-model="dialog"
      :scrim="false"
      persistent
      width="auto"
    >
      <VCard color="primary">
        <VCardText>
          Please stand by
          <VProgressLinear
            indeterminate
            color="white"
            class="mb-0"
          />
        </VCardText>
      </VCard>
    </VDialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
    }
  },

  watch: {
    dialog (val) {
      if (!val) return

      setTimeout(() => (this.dialog = false), 4000)
    },
  },
}
</script>

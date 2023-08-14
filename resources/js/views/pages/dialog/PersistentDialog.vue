<template>
  <VRow justify="center">
    <VDialog
      v-model="dialog"
      persistent
      width="auto"
    >
      <template #activator="{ props }">
        <VBtn
          color="primary"
          v-bind="props"
        >
          Open Dialog
        </VBtn>
      </template>
      <VCard>
        <VCardTitle class="text-h5">
          Use Google's location service?
        </VCardTitle>
        <VCardText>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</VCardText>
        <VCardActions>
          <VSpacer />
          <VBtn
            color="green-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Disagree
          </VBtn>
          <VBtn
            color="green-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Agree
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
  </VRow>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
    }
  },
}
</script>

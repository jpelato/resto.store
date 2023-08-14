<template>
  <div>
    <VRow justify="center">
      <VBtn
        color="primary"
        class="ma-2"
        @click="dialog = true"
      >
        Open Dialog 1
      </VBtn>
      <VDialog
        v-model="dialog"
        width="auto"
      >
        <VCard>
          <VCardTitle>
            Dialog 1
          </VCardTitle>
          <VCardText>
            <VBtn
              color="primary"
              class="ma-2"
              @click="dialog2 = true"
            >
              Open Dialog 2
            </VBtn>
          </VCardText>
          <VCardActions>
            <VBtn
              color="primary"
              variant="text"
              @click="dialog = false"
            >
              Close
            </VBtn>
          </VCardActions>
        </VCard>
      </VDialog>

      <VDialog
        v-model="dialog2"
        width="auto"
      >
        <VCard>
          <VCardTitle>
            Dialog 2
          </VCardTitle>
          <VCardText>
            <VBtn
              color="primary"
              @click="dialog3 = !dialog3"
            >
              Open Dialog 3
            </VBtn>
          </VCardText>
          <VCardActions>
            <VBtn
              color="primary"
              variant="text"
              @click="dialog2 = false"
            >
              Close
            </VBtn>
          </VCardActions>
        </VCard>
      </VDialog>

      <VDialog
        v-model="dialog3"
        width="auto"
      >
        <VCard>
          <VCardTitle>
            <span>Dialog 3</span>
          </VCardTitle>
          <VCardActions>
            <VBtn
              color="primary"
              variant="text"
              @click="dialog3 = false"
            >
              Close
            </VBtn>
          </VCardActions>
        </VCard>
      </VDialog>
    </VRow>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      dialog2: false,
      dialog3: false,
    }
  },
}
</script>

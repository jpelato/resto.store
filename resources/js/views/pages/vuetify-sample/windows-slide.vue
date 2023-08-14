<template>
  <VCard
    class="mx-auto"
    max-width="500"
  >
    <VCardTitle class="text-h6 font-weight-regular justify-space-between">
      <span>{{ currentTitle }}</span>
      <VAvatar
        color="primary"
        size="24"
        v-text="step"
      />
    </VCardTitle>

    <VWindow v-model="step">
      <VWindowItem :value="1">
        <VCardText>
          <VTextField
            label="Email"
            placeholder="john@google.com"
          />
          <span class="text-caption text-grey-darken-1">
            This is the email you will use to login to your Vuetify account
          </span>
        </VCardText>
      </VWindowItem>

      <VWindowItem :value="2">
        <VCardText>
          <VTextField
            label="Password"
            type="password"
          />
          <VTextField
            label="Confirm Password"
            type="password"
          />
          <span class="text-caption text-grey-darken-1">
            Please enter a password for your account
          </span>
        </VCardText>
      </VWindowItem>

      <VWindowItem :value="3">
        <div class="pa-4 text-center">
          <VImg
            class="mb-4"
            contain
            height="128"
            src="https://cdn.vuetifyjs.com/images/logos/v.svg"
          />
          <h3 class="text-h6 font-weight-light mb-2">
            Welcome to Vuetify
          </h3>
          <span class="text-caption text-grey">Thanks for signing up!</span>
        </div>
      </VWindowItem>
    </VWindow>

    <VDivider />

    <VCardActions>
      <VBtn
        v-if="step > 1"
        variant="text"
        @click="step--"
      >
        Back
      </VBtn>
      <VSpacer />
      <VBtn
        v-if="step < 3"
        color="primary"
        variant="flat"
        @click="step++"
      >
        Next
      </VBtn>
    </VCardActions>
  </VCard>
</template>

<script>
export default {
  data: () => ({
    step: 1,
  }),

  computed: {
    currentTitle () {
      switch (this.step) {
      case 1: return 'Sign-up'
      case 2: return 'Create a password'
      default: return 'Account created'
      }
    },
  },
}
</script>

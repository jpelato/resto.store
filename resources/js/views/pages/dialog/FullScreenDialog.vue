<template>
  <VRow justify="center">
    <VDialog
      v-model="dialog"
      fullscreen
      :scrim="false"
      transition="dialog-bottom-transition"
    >
      <template #activator="{ props }">
        <VBtn
          color="primary"
          dark
          v-bind="props"
        >
          Open Dialog
        </VBtn>
      </template>
      <VCard>
        <VToolbar
          dark
          color="primary"
        >
          <VBtn
            icon
            dark
            @click="dialog = false"
          >
            <VIcon>mdi-close</VIcon>
          </VBtn>
          <VToolbarTitle>Settings</VToolbarTitle>
          <VSpacer />
          <VToolbarItems>
            <VBtn
              variant="text"
              @click="dialog = false"
            >
              Save
            </VBtn>
          </VToolbarItems>
        </VToolbar>
        <VList
          lines="two"
          subheader
        >
          <VListSubheader>User Controls</VListSubheader>
          <VListItem
            title="Content filtering"
            subtitle="Set the content filtering level to restrict apps that can be downloaded"
          />
          <VListItem
            title="Password"
            subtitle="Require password for purchase or use password to restrict purchase"
          />
        </VList>
        <VDivider />
        <VList
          lines="two"
          subheader
        >
          <VListSubheader>General</VListSubheader>
          <VListItem
            title="Notifications"
            subtitle="Notify me about updates to apps or games that I downloaded"
          >
            <template #prepend>
              <VCheckbox v-model="notifications" />
            </template>
          </VListItem>
          <VListItem
            title="Sound"
            subtitle="Auto-update apps at any time. Data charges may apply"
          >
            <template #prepend>
              <VCheckbox v-model="sound" />
            </template>
          </VListItem>
          <VListItem
            title="Auto-add widgets"
            subtitle="Automatically add home screen widgets"
          >
            <template #prepend>
              <VCheckbox v-model="widgets" />
            </template>
          </VListItem>
        </VList>
      </VCard>
    </VDialog>
  </VRow>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
    }
  },
}
</script>

<style>
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}
</style>

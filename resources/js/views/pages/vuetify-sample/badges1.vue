
<template>
  <VToolbar
    title="Application"
    color="grey-lighten-3"
  >
    <VBtn stacked>
      <VBadge
        color="error"
        dot
      >
        <VIcon icon="mdi-newspaper-variant-outline" />
      </VBadge>

      News
    </VBtn>

    <VBtn stacked>
      <VBadge
        dot
        color="error"
      >
        <VIcon icon="mdi-post" />
      </VBadge>

      Blog
    </VBtn>

    <VBtn
      stacked
      variant="tonal"
    >
      <VIcon icon="mdi-login" />

      Login
    </VBtn>
  </VToolbar>
</template>

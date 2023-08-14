
<template>
  <VList
    border
    class="mx-auto"
    max-width="256"
  >
    <VListItem
      link
      prepend-icon="mdi-inbox-arrow-down"
      title="Inbox"
    >
      <template #append>
        <VBadge
          color="error"
          content="6"
          inline
        />
      </template>
    </VListItem>

    <VListItem
      link
      prepend-icon="mdi-send"
      title="Sent Mail"
    />

    <VListItem
      link
      prepend-icon="mdi-delete"
      title="Trash"
    >
      <template #append>
        <VBadge
          color="info"
          content="12"
          inline
        />
      </template>
    </VListItem>

    <VListItem
      link
      prepend-icon="mdi-alert-circle"
      title="Spam"
    />
  </VList>
</template>

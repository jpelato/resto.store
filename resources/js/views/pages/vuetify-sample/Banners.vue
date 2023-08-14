<template>
  <div>
    <VBanner
      lines="one"
      icon="mdi-lock"
      color="deep-purple-accent-4"
      class="my-4"
    >
      <VBannerText>
        Banner with one line of text.
      </VBannerText>

      <template #actions>
        <VBtn>Action</VBtn>
      </template>
    </VBanner>

    <VBanner
      lines="two"
      icon="mdi-weather-hurricane"
      color="error"
      class="my-4"
    >
      <VBannerText>
        Banner with two lines of text. If the text is too long to fit on two lines then an ellipsis will be used to hide the remaining content. So this next line will be hidden.
      </VBannerText>

      <template #actions>
        <VBtn>Action</VBtn>
      </template>
    </VBanner>

    <VBanner
      lines="three"
      icon="$warning"
      color="warning"
      class="my-4"
    >
      <VBannerText>
        Banner with three lines of text. One or two lines is preferable. Three lines should be considered the absolute maximum length on desktop in order to keep messages short and actionable.
      </VBannerText>

      <template #actions>
        <VBtn>Action</VBtn>
      </template>
    </VBanner>
  </div>
</template>

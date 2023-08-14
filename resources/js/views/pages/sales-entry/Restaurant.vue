<script setup>
import foodMenu2 from '@images/foodMenus/menu1.jpeg'
import foodMenu3 from '@images/foodMenus/menu2.jpeg'
import foodMenu1 from '@images/foodMenus/menu3.jpeg'
import {
  useRoute,
} from 'vue-router'

const route = useRoute()
const activeTab = ref(route.params.tab)

const tabItems = [{
  title: 'Coffee',
  tab: 'coffee',
  menus: [{
    title: 'Menu 1 Food',
    discription: 'The Best Eggs Benedict Nothing says, "it\'s the weekend," like brunch does. It\'s great on the days when you sleep through breakfast, but aren\'t quite ready to eat lunch. ',
    image: foodMenu2,
    price: '200',
  }, {
    title: 'Menu 2 Food',
    discription: 'The Best Eggs Benedict Nothing says, "it\'s the weekend," like brunch does. It\'s great on the days when you sleep through breakfast, but aren\'t quite ready to eat lunch. ',
    image: foodMenu3,
    price: '200',
  }, {
    title: 'Menu 3 Food',
    discription: 'The Best Eggs Benedict Nothing says, "it\'s the weekend," like brunch does. It\'s great on the days when you sleep through breakfast, but aren\'t quite ready to eat lunch. ',
    image: foodMenu1,
    price: '200',
  }, {
    title: 'Menu 4 Food',
    discription: 'The Best Eggs Benedict Nothing says, "it\'s the weekend," like brunch does. It\'s great on the days when you sleep through breakfast, but aren\'t quite ready to eat lunch. ',
    image: foodMenu2,
    price: '200',
  }, {
    title: 'Menu 5 Food',
    discription: 'The Best Eggs Benedict Nothing says, "it\'s the weekend," like brunch does. It\'s great on the days when you sleep through breakfast, but aren\'t quite ready to eat lunch. ',
    image: foodMenu3,
    price: '200',
  }, {
    title: 'Menu 6 Food',
    discription: 'The Best Eggs Benedict Nothing says, "it\'s the weekend," like brunch does. It\'s great on the days when you sleep through breakfast, but aren\'t quite ready to eat lunch. ',
    image: foodMenu1,
    price: '200',
  }],
}, {
  title: 'Food',
  tab: 'food',
  menus: [{
    title: 'Menu 1 Food',
    discription: 'The Best Eggs Benedict Nothing says, "it\'s the weekend," like brunch does. It\'s great on the days when you sleep through breakfast, but aren\'t quite ready to eat lunch. ',
    image: foodMenu2,
    price: '200',
  }, {
    title: 'Menu 2 Food',
    discription: 'The Best Eggs Benedict Nothing says, "it\'s the weekend," like brunch does. It\'s great on the days when you sleep through breakfast, but aren\'t quite ready to eat lunch. ',
    image: foodMenu3,
    price: '200',
  }, {
    title: 'Menu 3 Food',
    discription: 'The Best Eggs Benedict Nothing says, "it\'s the weekend," like brunch does. It\'s great on the days when you sleep through breakfast, but aren\'t quite ready to eat lunch. ',
    image: foodMenu1,
    price: '200',
  }, {
    title: 'Menu 4 Food',
    discription: 'The Best Eggs Benedict Nothing says, "it\'s the weekend," like brunch does. It\'s great on the days when you sleep through breakfast, but aren\'t quite ready to eat lunch. ',
    image: foodMenu2,
    price: '200',
  } ],
}, {
  title: 'Snack',
  tab: 'snack',
  menus: [{
    title: 'Menu 1 Food',
    discription: 'The Best Eggs Benedict Nothing says, "it\'s the weekend," like brunch does. It\'s great on the days when you sleep through breakfast, but aren\'t quite ready to eat lunch. ',
    image: foodMenu2,
    price: '200',
  }, {
    title: 'Menu 2 Food',
    discription: 'The Best Eggs Benedict Nothing says, "it\'s the weekend," like brunch does. It\'s great on the days when you sleep through breakfast, but aren\'t quite ready to eat lunch. ',
    image: foodMenu3,
    price: '200',
  }, {
    title: 'Menu 3 Food',
    discription: 'The Best Eggs Benedict Nothing says, "it\'s the weekend," like brunch does. It\'s great on the days when you sleep through breakfast, but aren\'t quite ready to eat lunch. ',
    image: foodMenu1,
    price: '200',
  }, {
    title: 'Menu 4 Food',
    discription: 'The Best Eggs Benedict Nothing says, "it\'s the weekend," like brunch does. It\'s great on the days when you sleep through breakfast, but aren\'t quite ready to eat lunch. ',
    image: foodMenu2,
    price: '200',
  }, {
    title: 'Menu 5 Food',
    discription: 'The Best Eggs Benedict Nothing says, "it\'s the weekend," like brunch does. It\'s great on the days when you sleep through breakfast, but aren\'t quite ready to eat lunch. ',
    image: foodMenu3,
    price: '200',
  } ],
}, {
  title: 'Dessert',
  tab: 'dessert',
  menus: [{
    title: 'Menu 1 Food',
    discription: 'The Best Eggs Benedict Nothing says, "it\'s the weekend," like brunch does. It\'s great on the days when you sleep through breakfast, but aren\'t quite ready to eat lunch. ',
    image: foodMenu2,
    price: '200',
  }, {
    title: 'Menu 2 Food',
    discription: 'The Best Eggs Benedict Nothing says, "it\'s the weekend," like brunch does. It\'s great on the days when you sleep through breakfast, but aren\'t quite ready to eat lunch. ',
    image: foodMenu3,
    price: '200',
  }, {
    title: 'Menu 3 Food',
    discription: 'The Best Eggs Benedict Nothing says, "it\'s the weekend," like brunch does. It\'s great on the days when you sleep through breakfast, but aren\'t quite ready to eat lunch. ',
    image: foodMenu1,
    price: '200',
  } ],
} ]

const transactions = [{
  amount: +82.6,
  food_menu: 'Food 1',
  icon: foodMenu1,
  color: 'error',
}, {
  food_menu: 'Food 2',
  amount: +270.69,
  icon: foodMenu2,
  color: 'primary',
}, {
  amount: +637.91,
  food_menu: 'food 3',
  icon: foodMenu3,
  color: 'info',
}]
</script>

<template>
  <VRow>
    <VCol cols="9">
      <VCard>
        <VTabs
          v-model="activeTab"
          align-tabs="center"
        >
          <VTab
            v-for="item in tabItems"
            :key="item.icon"
            :value="item.tab"
          >
            {{ item.title }}
          </VTab>
        </VTabs>
        <VDivider />
        <VDivider />
        <VCardText>
          <VForm>
            <VAutocomplete
              v-model="newPassword"
              hide-details
              density="compact"
              clearable
              :items="['A884HDF-GEM 3IN1','B884HDF-OSHI','C884HDF-HAPPY','D884HDF-CONR BEFF']"
              append-inner-icon="bx-search-alt-2"
              placeholder="MENU FILTER BY CATEGORY"
              @click:append-inner="isNewPasswordVisible = !isNewPasswordVisible"
            />
          </VForm>
        </VCardText>
        <!-- tabs content -->
        <VWindow
          v-model="activeTab"
          class="pa-5"
        >
          <VWindowItem
            v-for="item in tabItems"
            :key="item"
            :value="item.tab"
            class="text-center menuconfiguration"
          >
            <VRow
              justify="center"
              align="center"
            >
              <VCol
                v-for="menu in item.menus"
                :key="menu.title"
                cols="auto"
              >
                <VCard max-width="260">
                  <VContainer>
                    <VRow
                      justify="center"
                      align="center"
                    >
                      <VCol
                        cols="12"
                        class="ma-auto pa-1"
                      >
                        <VImg
                          height="230"
                          cover
                          :src="menu.image"
                          class="ma-auto"
                        />
                      </VCol>
                      <VCol
                        cols="auto"
                        class="pa-0 ma-0"
                      >
                        <div class="d-flex align-center">
                          <VBtn
                            size="24"
                            variant="outlined"
                            icon="bx-minus"
                            class="ma-1"
                          />
                          <VAvatar
                            color="info"
                            size="24"
                            class="ma-1"
                          >
                            3
                          </VAvatar>
                          <VBtn
                            size="24"
                            variant="outlined"
                            icon="bx-plus"
                            class="ma-1"
                          />
                        </div>
                      </VCol>
                    </VRow>
                  </VContainer>
                  <VCardItem class="pa-0 ma-0">
                    <b>{{ menu.title }}</b>
                  </VCardItem>
                  <VCardItem class="pa-0 ma-0">
                    <span
                      color="teal"
                      class="font-weight-medium"
                    >{{ menu.price }}</span>
                  </VCardItem>
                  <VCardText class="pa-2 ma-0">
                    {{ menu.discription }}
                  </VCardText>
                  <div class="pa-2 d-flex align-center">
                    <VIcon
                      color="info"
                      icon="gg:size"
                    />
                    <h1 class="text-caption text-medium-emphasis text-h5 mx-1 font-weight-bold">
                      SIZE
                    </h1>
                    <VBtn
                      class="mx-1"
                      flat
                      density="comfortable"
                      variant="outlined"
                      size="small"
                    >
                      Small
                    </VBtn>
                    <VBtn
                      class="mx-1"
                      flat
                      density="comfortable"
                      variant="outlined"
                      size="small"
                    >
                      Large
                    </VBtn>
                  </div>
                  <VCardActions class="justify-space-between">
                    <VBtn
                      block
                      variant="flat"
                    >
                      <VIcon
                        start
                        icon="material-symbols:add-chart-rounded"
                      />
                      ADD TO ORDER LIST
                    </VBtn>
                  </VCardActions>
                </VCard>
              </VCol>
            </VRow>
          </VWindowItem>
        </VWindow>
      </VCard>
    </VCol>
    <VCol cols="3">
      <VCard title="Order List">
        <VCardText class="pa-2">
          <VCardText>
            <VList class="card-list itemconfiguration">
              <VListItem
                v-for="item in transactions"
                :key="item.food_menu"
              >
                <template #prepend>
                  <VAvatar
                    rounded
                    variant="tonal"
                    :color="item.color"
                    :image="item.icon"
                    class="me-3"
                  />
                </template>
                <VListItemTitle class="mb-1">
                  {{ item.food_menu }}
                </VListItemTitle>
                <template #append>
                  <VListItemAction>
                    <span class="me-1">{{ item.amount > 0 ? `+$${Math.abs(item.amount)}` : `-$${Math.abs(item.amount)}` }}</span>
                    <span class="text-disabled">USD</span>
                  </VListItemAction>
                </template>
              </VListItem>
            </VList>
          </VCardText>
        </VCardText>
        <VCardText>
          <VForm>
            <VTextField
              v-model="newPassword"
              hide-details
              density="compact"
              type="text"
              append-inner-icon="bx-search-alt-2"
              placeholder="Customer Name"
              @click:append-inner="isNewPasswordVisible = !isNewPasswordVisible"
            />
          </VForm>
        </VCardText>
        <VCardText class="d-flex py-2">
          <div class="me-auto ps-4">
            Customer
          </div>
          <div class="ms-auto ps-4">
            Shella Guzman
            <VIcon
              color="warning"
              left
              icon="bx-trash"
            />
          </div>
        </VCardText>
        <VCardText class="d-flex py-2">
          <div class="me-auto ps-4">
            Date
          </div>
          <div class="ms-auto ps-4">
            02/03/2023 10:00 PM
          </div>
        </VCardText>
        <VCardText class="d-flex py-2">
          <div class="me-auto ps-4">
            Subtotal
          </div>
          <div class="ms-auto ps-4">
            45
          </div>
        </VCardText>
        <VCardText class="d-flex py-2">
          <div class="me-auto ps-4">
            Discount
          </div>
          <div class="ms-auto ps-4">
            45
          </div>
        </VCardText>
        <VCardText class="d-flex py-2">
          <div class="me-auto ps-4">
            Subtotal Prefex
          </div>
          <div class="ms-auto ps-4">
            45
          </div>
        </VCardText>
        <VCardText class="d-flex py-2">
          <div class="me-auto ps-4">
            Tax
          </div>
          <div class="ms-auto ps-4">
            45
          </div>
        </VCardText>
        <VCardText class="d-flex py-2">
          <div class="me-auto ps-4">
            <b>TOTAL</b>
          </div>
          <div class="ms-auto ps-4">
            <b>45</b>
          </div>
        </VCardText>
        <VDivider />
        <VCardText class="d-flex py-2">
          <div class="me-auto ps-4">
            DUE
          </div>
          <div class="ms-auto ps-4">
            45
          </div>
        </VCardText>
        <VDivider />
        <VCardText class="flex my-0">
          <VBtn
            block
            variant="flat"
            class="my-1"
          >
            <VIcon
              start
              left
              icon="material-symbols:order-play"
            /> Place an Order
          </VBtn>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

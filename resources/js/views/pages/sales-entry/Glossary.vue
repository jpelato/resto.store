<script setup>
const items = [{
  code: 'DL2345',
  item: 'Frozen Yogurt',
  qty: 2,
  price: 25,
  unit: 24,
  discount: 4,
  discount_percentage: 4,
  amount: 4,
} ]
</script>

<template>
  <VRow class="flex">
    <VCol
      class="px-1"
      cols="9"
    >
      <VCard>
        <VCardText>
          <VForm>
            <VAutocomplete
              v-model="newPassword"
              hide-details
              density="compact"
              clearable
              :items="['A884HDF-GEM 3IN1','B884HDF-OSHI','C884HDF-HAPPY','D884HDF-CONR BEFF']"
              append-inner-icon="bx-search-alt-2"
              placeholder="Product Code"
              @click:append-inner="isNewPasswordVisible = !isNewPasswordVisible"
            />
          </VForm>
        </VCardText>
        <VDivider />
        <VCardText>
          <VTable
            density="compact"
            fixed-header
            height="600"
          >
            <thead>
              <tr>
                <th class="text-uppercase">
                  Code
                </th>
                <th>Item</th>
                <th>QTY</th>
                <th>Price</th>
                <th>Unit</th>
                <th>Discount</th>
                <th>Disc(%)</th>
                <th>Amount</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in items"
                :key="item.code"
              >
                <td>
                  {{ item.code }}
                </td>
                <td class="text-center">
                  {{ item.item }}
                </td>
                <td class="text-center">
                  {{ item.qty }}
                </td>
                <td class="text-center">
                  {{ item.price }}
                </td>
                <td class="text-center">
                  {{ item.unit }}
                </td>
                <td class="text-center">
                  {{ item.discount }}
                </td>
                <td class="text-center">
                  {{ item.discount_percentage }}
                </td>
                <td class="text-center">
                  {{ item.amount }}
                </td>
                <td class="text-center">
                  <VIcon
                    color="info"
                    start
                    icon="mdi-book-plus"
                  />
                  <VIcon
                    color="warning"
                    start
                    icon="mdi-book-cancel"
                  />
                </td>
              </tr>
            </tbody>
          </VTable>
        </VCardText>
      </VCard>
    </VCol>
    <VCol
      class="px-1"
      cols="3"
    >
      <VCard>
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
            Clerk
          </div>
          <div class="ms-auto ps-4">
            Shenah Guzman
          </div>
        </VCardText>
        <VCardText class="d-flex py-2">
          <div class="me-auto ps-4">
            Till
          </div>
          <div class="ms-auto ps-4">
            Till 1
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
              icon="material-symbols:inactive-order-sharp"
            /> Hold
          </VBtn>
          <VBtn
            block
            variant="flat"
            class="my-1"
          >
            <VIcon
              start
              icon="icon-park-outline:credit"
            />Credit
          </VBtn>
          <VBtn
            block
            variant="flat"
            class="my-1"
          >
            <VIcon
              start
              icon="bx-money"
            />Cash
          </VBtn>
        </VCardText>
        <VCardText>
          <VList>
            <VDivider />
            <VListItemTitle class="text-center">
              On Hold Item
            </VListItemTitle>
            <VDivider />
            <VListItem>
              <template #prepend>
                <VListItemTitle> 20:30AM </VListItemTitle>
              </template>
              <VListItemTitle class="text-center">
                <span>TOTAL: 3100</span>
              </VListItemTitle>
              <template #append>
                <VListItemAction>
                  <VIcon
                    color="warning"
                    end
                    icon="material-symbols:inactive-order-sharp"
                  />
                </VListItemAction>
              </template>
            </VListItem>
          </VList>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

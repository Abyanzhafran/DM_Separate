<template>
  <q-page padding>
    <div class="row q-pt-lg justify-left">
      <div class="q-pa-md" v-for="count in 6" :key="count">
        <q-card class="my-card column float-left" style="width: 302px">
          <img src="~assets/mountain.jpg">
          <q-card-actions align="right">
            <q-btn flat round color="blue-grey-9" icon="save_alt" />
            <q-btn flat round color="primary" icon="share" />
            <q-btn flat round color="blue-grey-9" icon="create" />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>

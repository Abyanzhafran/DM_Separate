<template>
  <q-page class="flex flex-center">
    <q-card class="my-card column float-left" style="width: 400px">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-actions align="right">
        <q-btn flat round color="red" icon="favorite" />
        <q-btn flat round color="teal" icon="bookmark" />
        <q-btn flat round color="primary" icon="share" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>

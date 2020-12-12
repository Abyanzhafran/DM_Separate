<template>
  <q-layout view="lHh Lpr lFf">

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

export default {
  name: 'The_Front',
  components: { EssentialLink },
  data () {
    return {
      essentialLinks: linksData
    }
  }
}
</script>

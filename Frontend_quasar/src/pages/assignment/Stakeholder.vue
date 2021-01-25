<template>
  <q-page padding>
    <div class="row q-pt-lg justify-left">

      <div class="q-pa-md" v-for="count in 2" :key="count">
        <q-card class="my-card float-left cus-size">

          <q-card-section>
            <div class="text-h5">
              <a href="/#/access/leadership" class="cus-card-stk">Event Controller</a>
              <q-btn flat round class="float-right" icon="more_vert"/>              
              <q-separator class="q-mt-xl" color="black" size="2px"/>
            </div>
            <div class="q-mt-md">
              Iyaak
            </div>
              <q-btn round class="float-right q-mt-sm">
                <q-avatar size="75px">
                  <img src="~assets/mountain.jpg">
                </q-avatar>
              </q-btn>
          </q-card-section>

          <q-card-actions class="absolute-bottom-right">
            <q-btn flat round color="blue-grey-9" icon="save_alt" />
            <q-btn flat round color="primary" icon="share" />
            <q-btn class="item" flat round color="blue-grey-9" icon="create" />
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

<style lang="css">
  .cus-bold {
    height: 2px;
    background-color: black;
  }
  .cus-size {
    width: 302px; 
    height: 296px;
  }
  .cus-card-stk {
    text-decoration: none;
  }
</style>

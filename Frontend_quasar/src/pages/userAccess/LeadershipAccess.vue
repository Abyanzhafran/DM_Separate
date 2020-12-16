<template>
  <q-page padding>
    <div class="row q-pt-lg justify-left">

      <div>
        <q-card flat bordered class="my-card cus-card q-ml-sm">
         <q-linear-progress size="15px" :value="progress" />  
          <q-card-section>
            <div class="q-pb-md cus-list">Current Project</div>
            <q-card class="my-card q-mb-sm" v-for='count in 2' :key='count'>
              <q-card-section class="bg-white">
                <div class="text-h6">Our Changing Planet</div>
                <div class="text-subtitle2">by John wick</div>
              </q-card-section>
            </q-card>
          </q-card-section>
        </q-card>
      </div>

      <div>
        <q-card flat bordered class="my-card cus-card q-ml-sm">
         <q-linear-progress size="15px" :value="progress" color="warning"/>  
          <q-card-section>
            <div class="q-pb-md cus-list">Up Next</div>
            <q-card class="my-card q-mb-sm" v-for='count in 3' :key='count'>
              <q-card-section class="bg-white">
                <div class="text-h6">Our Changing Planet</div>
                <div class="text-subtitle2">by John wick</div>
              </q-card-section>
            </q-card>
          </q-card-section>
        </q-card>
      </div>

      <div>
        <q-card flat bordered class="my-card cus-card q-ml-sm">
         <q-linear-progress size="15px" :value="progress" color="red"/>  
          <q-card-section>
            <div class="q-pb-md cus-list">Urgent</div>
            <q-card class="my-card q-mb-sm" v-for='count in 4' :key='count'>
              <q-card-section class="bg-white">
                <div class="text-h6">Our Changing Planet</div>
                <div class="text-subtitle2">by John wick</div>
              </q-card-section>
            </q-card>
          </q-card-section>
        </q-card>
      </div>

      <div>
        <q-card flat bordered class="my-card cus-card q-ml-sm">
         <q-linear-progress size="15px" :value="progress" color="green"/>  
          <q-card-section>
            <div class="q-pb-md cus-list">Done</div>
            <q-card class="my-card q-mb-sm" v-for='count in 2' :key='count'>
              <q-card-section class="bg-white">
                <div class="text-h6">Our Changing Planet</div>
                <div class="text-subtitle2">by John wick</div>
              </q-card-section>
            </q-card>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import uid from 'quasar';

export default {
  name: 'PageIndex',
  data: () => ({
    progress: 1.0
  })
}
</script>

<style lang="css">
.cus-card {
  background-color: lightgrey;
}
.cus-list {
  font-size: 18px;
  font-weight: 500;
}
</style>

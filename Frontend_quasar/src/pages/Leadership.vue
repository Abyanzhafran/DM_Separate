<template>
  <q-page padding>
    <div class="row q-pt-lg justify-left">

      <div class="q-pa-md" v-for="count in 2" :key="count">
        <q-card class="my-card column float-left cus-size">
          <q-card-section>
            <div class="text-h5">
              <a href="/access" class="black cus-card">Maintain all Things</a>
              <q-btn flat round class="float-right" icon="more_vert"/>              
              <hr class="cus-bold q-mt-xl"/>
            </div>
            <div class="q-mt-md">
              Iyaak
            </div>
              <q-btn round class="float-right q-mt-sm">
                <q-avatar size="75px">
                  <img src="~assets/iyaak_1.jpg">
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
  name: 'PageIndex',
  data: () => ({
    label: 'Write here',
    edit: [
      {
        chairmanEdit: 'something'
      }
    ]
  }),
  methods: {
    cardEdit() {
      action: () => {
        this.chairmanEdit
      }
    }
  }
}
</script>

<style lang="css">
  .cus-bold {
    height: 2px;
    background-color: black;
  }
  .cus-size {
    width: 302px; 
    height: 302px;
  }
  .cus-card {
    text-decoration: none;
    font-family: arial;
    font-weight: 500;
  }
</style>

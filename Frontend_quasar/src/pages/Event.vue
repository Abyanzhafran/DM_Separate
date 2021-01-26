<template>
  <q-page padding>
    <div class="row q-pt-lg justify-left">
      <div
        class="q-pa-md"
        v-for="n in 2"
        :key="n"
      >
        <q-card
          class="my-card float-left cus-size-evnt"
          flat
          bordered
        >
          <q-card-section
            horizontal
            class="q-pb-xl bg-cyan-3"
          >
            <q-card-section class="q-pt-xs">
              <div class="text-overline">
                Overline
              </div>
              <div class="text-h5 q-mt-sm q-mb-xs">
                Title
              </div>
              <div class="text-caption text-dark">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </q-card-section>
          </q-card-section>

          <q-separator />

          <q-card-actions class="q-py-xs absolute-bottom-left">
            <q-btn
              flat
              round
              icon="event"
            />
            <q-btn flat>
              7:30PM
            </q-btn>
            <q-btn
              flat
              color="primary"
            >
              Reserve
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
};
</script>

<style lang="css">
  .cus-bold {
    height: 2px;
    background-color: black;
  }
  .cus-size-evnt {
    width: 350px;
    height: 257px;
  }
  .cus-card {
    text-decoration: none;
  }
</style>

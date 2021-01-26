<template>
  <div>
    <q-layout view="hHh Lpr lff">
      <q-header
        elevated
        class="bg-white"
      >
        <!--bg-teal-14 -->

        <q-toolbar>
          <q-btn
            flat
            @click="drawer = !drawer"
            round
            dense
            icon="menu"
            style="color: black"
          />
          <q-toolbar-title class="text-grey-10 text-bold">
            Assignment
          </q-toolbar-title>
          <q-tabs
            v-model="tab"
            class="absolute-center"
          >
            <q-tab
              class="cus-color"
              name="assignment"
              label="Assignment"
            />
            <q-tab
              class="cus-color"
              name="work"
              label="work"
            />
            <q-tab
              class="cus-color"
              name="people"
              label="people"
            />
          </q-tabs>
          <div class="absolute-right q-pt-sm q-pr-md">
            <q-btn
              icon="add"
              flat
              round
              dense
              style="color: black"
            />
          </div>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        :width="200"
        :breakpoint="500"
        bordered
        content-class="bg-grey-2"
      >
        <q-scroll-area class="fit">
          <q-list>
            <div
              class="text-h5 text-weight-bold text-center q-py-md"
            >
              Main Work
            </div>
            <div class="q-pl-lg q-pb-md">
              <q-btn
                color="primary"
                icon="add_box"
                label="Add Unit"
              />
            </div>
            <div>
              <q-icon
                size="lg"
                name="leader"
              />
            </div>

            <!-- ITEM USING PROPS -->
            <custom-link
              v-for="link in qdrawerLinks"
              :key="link.id"
              v-bind="link"
            />
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import CustomLink from 'components/CustomLink';
import { uid } from 'quasar';

export default {
  name: 'Main',
  data() {
    return {
      tab: 'assignment',
      drawer: true,
      qdrawerLinks: [
        {
          id: uid(),
          caption: 'Leadership',
          icon: 'how_to_reg',
          link: '/assignment/leadership',
        },
        {
          id: uid(),
          caption: 'Stakeholders',
          icon: 'supervisor_account',
          link: '/assignment/stakeholder',
        },
        {
          id: uid(),
          caption: 'Divisions',
          icon: 'widgets',
          link: '###',
        },
        {
          id: uid(),
          caption: 'Event',
          icon: 'event_note',
          link: '/assignment/event',
        },
      ],
    };
  },
  components: {
    CustomLink,
  },
};
</script>

<style lang="css">
.flex-break {
    flex: 1 0 100% !important;
    height: 0 !important;
}
.cus-size {
    font-size: 15px;
}
.cus-color {
    color: black;
}
</style>

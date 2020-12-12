<template>
    <div class="q-pa-md">
    	 <q-layout view="hHh Lpr lff">
             <q-header elevated class="bg-white">  <!--bg-teal-14 -->
                <q-toolbar>
                    <q-btn
                        flat
                        @click="drawer = !drawer"
                        round
                        dense
                        icon="menu"
                        style="color: black"
                    />
                    <q-toolbar-title class="text-grey-10">
                        <img src="~assets/Bersamabisa_Logo.png" style="width: 40px">
                        Data Management
                    </q-toolbar-title>
                    <q-btn outline color="primary" label="Assignment" class="float-right" icon="corporate_fare">
                        <q-tooltip 
                            content-class="bg-amber text-black"
                            content-style="font-size: 16px"
                        >
                            Make an Assignment
                        </q-tooltip>
                    </q-btn>
                </q-toolbar>
            </q-header>

            <q-drawer
                v-model="drawer"
                :width="200"
                :breakpoint="500"
                bordered
                content-class="bg-grey-3"
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
                            <q-icon size='lg' name="leader" />
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

            <!-- DIALOG MODAL -->
            <dialog-make-structure v-model="dialog" />

            <q-page-container>
                <router-view />
            </q-page-container>
        </q-layout>
    </div>
</template>

<script>
import DialogMakeStructure from "components/DialogMakeStructure";
import CustomLink from "components/CustomLink";
import { uid } from "quasar";

export default {
    name: "Main",
    data() {
        return {
            dialog: false,
              drawer: true,
              qdrawerLinks: [
                  {
                      id: uid(),
                      caption: 'Dashboard',
                      icon: 'home',
                      link: '/'
                  },
                  {
                      id: uid(),
                      caption: 'Play Demos',
                      icon: 'play_circle_outline',
                      link: '/play_demo'
                  },
                  {
                      id: uid(),
                      caption: 'Make it Here',
                      icon: 'account_tree',
                      action: () => {
                          this.dialog = !this.dialog
                      }
                  },
                  {
                      id: uid(),
                      caption: 'Overview',
                      icon: 'dashboard',
                      link: '/overview'
                  },
              ],
        }
    },
    components: {
        CustomLink,
        DialogMakeStructure
    },
};
</script>

<style lang="css">
.flex-break {
    flex: 1 0 100% !important;
    height: 0 !important;
}
</style>

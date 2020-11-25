<template>
    <div class="q-pa-md">
        <q-layout view="hHh Lpr lff">
            <q-header elevated class="bg-teal-14">
                <q-toolbar>
                    <q-btn
                        flat
                        @click="drawer = !drawer"
                        round
                        dense
                        icon="menu"
                    />
                    <q-toolbar-title>Data Management</q-toolbar-title>
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
                            <q-icon size="xl" name="leader" />
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
                      caption: "Play Demos",
                      icon: "play_circle_outline",
                  },
                  {
                      id: uid(),
                      caption: "Make it Here",
                      icon: "account_tree",
                      action: () => {
                          this.dialog = !this.dialog
                      }
                  },
                  {
                      id: uid(),
                      caption: "Overview",
                      icon: "dashboard",
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

<template>
    <!-- MAXIMIZED DIALOG FOR MAKE A STRUCTURE -->
    <q-dialog
				ref="myDialog"
        :value="value"
        @input="$emit('input', $event)"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
				@keyup.esc="close_dialogMakeStructure"
    >
        <q-card class="bg-teal-14 text-white">
            <q-bar>
                <q-space />

                <q-btn
                    dense
                    flat
                    icon="minimize"
                    @click="maximizedToggle = false"
                    :disable="!maximizedToggle"
                >
                    <q-tooltip
                        v-if="maximizedToggle"
                        content-class="bg-white text-primary"
                        >Minimize
                    </q-tooltip>
                </q-btn>
                <q-btn
                    dense
                    flat
                    icon="crop_square"
                    @click="maximizedToggle = true"
                    :disable="maximizedToggle"
                >
                    <q-tooltip
                        v-if="!maximizedToggle"
                        content-class="bg-white text-primary"
                        >Maximize
                    </q-tooltip>
                </q-btn>
                <q-btn dense flat 
                    icon="close" 
                    v-close-popup
                >
                    <q-tooltip content-class="bg-white text-primary">
                        Close
                    </q-tooltip>
                </q-btn>
            </q-bar>

            <q-card-section>
                <div class="text-h6">CREATE YOUR ORGANIZATIONAL STRUCTURE</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                <!-- CARD FOR STRUCTURE -->
                <q-card class="bg-white-9 my-card q-mb-md">
                    <q-card-section>
                        <div bordered class="text-dark text-h5">
                            Leadership Structure
                        </div>
                    </q-card-section>

                    <q-separator class="q-mb-lg" color="dark" inset />

                    <q-card-section>
                        <q-input
                            outlined
														v-model="leadership.chairman"
                            class="q-mb-md"
                            placeholder="Chairman"
                            :dense="(dense = true)"
                        />
                        <q-input
                            outlined
							v-model="leadership.vice_chairman"
                            class="q-mb-md"
                            placeholder="Vice Chairman"
                            :dense="(dense = true)"
                        />
                    </q-card-section>
                </q-card>

                <!-- STAKEHOLDER'S CARD -->
                <q-card class="bg-white-9 my-card q-mb-md">
                    <q-card-section>
                        <div bordered class="text-dark text-h5">
                            Stakeholder Structure
                            <div class="col-8 float-right">
                                <q-btn
                                    @click="addStakeholderModal"
                                    round
                                    dense
                                    flat
                                    icon="add_box"
                                    style="font-size: 0.8em"
                                />
                            </div>
                        </div>
                    </q-card-section>

                    <q-separator class="q-mb-lg" color="dark" inset />

                    <q-card-section>
                        <div
                            v-for="(stakeholder, indexs) in stakeholders"
                            :key="stakeholder.id"
                            class="q-mb-md"
                        >
                            <div class="col-8 float-right">
                                <q-btn
                                    @click.stop="deleteStakeholderModal(indexs)"
                                    flat
                                    round
                                    dense
                                    color="primary"
                                    icon="delete"
                                />
                            </div>
                            <q-input
                                outlined
                                v-model="stakeholder.type"
                                class="q-mb-md"
                                placeholder="Manager's type"
                                dense
                            />
                            <q-input
                                v-model="stakeholder.value"
                                filled
                                clearable
                                autogrow
                                color="green-8"
                                label="Explain your Stakeholder Function"
                            />
                        </div>
                    </q-card-section>
                </q-card>
                <!-- END STAKEHOLDER -->

                <!-- DIVISION'S CARD -->
                <q-card class="bg-white-9 my-card q-mb-md">
                    <q-card-section>
                        <div bordered class="text-dark text-h5">
                            Division Structure
                            <div class="col-8 float-right">
                                <q-btn
                                    @click="addDivisionModal"
                                    round
                                    dense
                                    flat
                                    icon="add_box"
                                    style="font-size: 0.8em"
                                />
                            </div>
                        </div>
                    </q-card-section>

                    <q-separator class="q-mb-lg" color="dark" inset />

                    <q-card-section>
                        <div
                            v-for="(division, index) in divisions"
                            :key="division.id"
                            class="q-mb-md"
                        >
                            <div class="col-8 float-right">
                                <q-btn
                                    @click.stop="deleteDivisionModal(index)"
                                    flat
                                    round
                                    dense
                                    color="primary"
                                    icon="delete"
                                />
                            </div>
                            <q-input
                                outlined
                                v-model="division.type"
                                class="q-mb-md"
                                placeholder="Manager's type"
                                dense
                            />
                            <q-input
                                v-model="division.value"
                                filled
                                clearable
                                autogrow
                                color="green-8"
                                label="Explain your Stakeholder Function"
                            />
                        </div>
                    </q-card-section>
                </q-card>
                <!-- END DIVISION -->

                <q-btn
                    class="float-right q-mb-md"
                    color="primary"
                    label="Save"
                    @click="save"
                />

                <!-- END OF CARD -->
            </q-card-section>
        </q-card>
    </q-dialog>
    <!-- END OF DIALOG -->
</template>

<script>
import { event, uid } from "quasar";
import axios from 'axios';

export default {
    name: 'DialogMakeStructure',
    props: {
        value: {
            type: Boolean,
            required: true,
        },
    },
    data: () => ({
        /* DIALOG MAXIMIZED */
        maximizedToggle: true,
        dense: false,
        model: null,

        /* AUTO GROW TEXTAREA */
        inputModel: "",
        textareaModel: "",

        inputFillCancelled: false,
				textareaFillCancelled: true,
				
				leadership: [
					{
							id: uid(),
							chairman: null,
							vice_chairman: null
					}
				],
        stakeholders: [
            {
                id: uid(),
                value: null,
                type: null,
            },
        ],
        divisions: [
            {
                id: uid(),
                value: null,
                type: null,
            },
        ],
    }),
    methods: {
        // SYNTAXIS
        // addElementModal() {
        //   this.clone(this.stakeholders, null, null)
        //   this.clone(this.divisions, null, null)
        // },
        addStakeholderModal() {
            this.stakeholders.push({
                id: uid()
            });
        },
        deleteStakeholderModal(indexs) {
            this.stakeholders.splice(indexs, 1)
        },
        addDivisionModal() {
            this.divisions.push({
                id: uid()
            });
        },
        deleteDivisionModal(index) {
            this.divisions.splice(index, 1)
				},
				close_dialogMakeStructure() {
						this.$refs.myDialog.hide()
                },
                //REQUEST data

				// POST data
				save() {
					axios.post('http://127.0.0.1:8000/api/test', {
						data: this.stakeholders
					})
					 .then(function(res) {
					 	console.log(res.data);
					 })
				}
		}
};
</script>


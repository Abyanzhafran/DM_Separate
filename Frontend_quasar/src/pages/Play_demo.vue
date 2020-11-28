<template>
    <q-page padding>
        <div class="row q-gutter-lg justify-center">
            <q-card class="my-card">
                <q-card-section class="bg-light-blue-5 text-white">
                    <div class="text-h6">Leader</div>
                    <div class="text-subtitle2">Click More for Description</div>
                </q-card-section>
                <q-card-actions vertical align="right">
                    <q-btn label="More" @click="d_Leader" flat />
                </q-card-actions>
            </q-card>

            <q-card class="my-card">
                <q-card-section class="bg-green-5 text-white">
                    <div class="text-h6">Stakeholder</div>
                    <div class="text-subtitle2">Click More for Description</div>
                </q-card-section>
                <q-card-actions vertical align="right">
                    <q-btn label="More" @click="d_Stakeholder" flat />
                </q-card-actions>
            </q-card>

            <q-card class="my-card">
                <q-card-section class="bg-yellow-9 text-white">
                    <div class="text-h6">Division</div>
                    <div class="text-subtitle2">Click More for Description</div>
                </q-card-section>
                <q-card-actions vertical align="right">
                    <q-btn
                        v-model="toolbar"
                        label="More"
                        @click="d_Division"
                        flat
                    />
                </q-card-actions>
            </q-card>
        </div>
        <div class="q-pb-none">
            <h6>Main Organizational Structure (example)</h6>
            <q-tree :nodes="simple" node-key="label" />
        </div>
    </q-page>
</template>

<script>
import axios from 'axios';
export default {
    name: "Demo",
    data() {
        return {
            simple: [
                {
                    label: "ORGANIZATION/COMPANY",
                    icon: "apartment",
                    class: "text-weight-medium",
                    children: [
                        {
                            label: "Leader",
                            icon: "how_to_reg",
                            children: [
                                {
                                    label: "President",
                                    icon: "person_pin",
                                },
                                {
                                    label: "Vice President",
                                    icon: "account_circle",
                                },
                            ],
                        },
                        {
                            label: "Stakeholder",
                            icon: "supervisor_account",
                            children: [
                                {
                                    label: "Manager 1",
                                    icon: "supervised_user_circle",
                                },
                                {
                                    label: "Manager 2",
                                    icon: "supervised_user_circle",
                                },
                                {
                                    label: "Manager 3",
                                    icon: "supervised_user_circle",
                                },
                            ],
                        },
                        {
                            label: "Division",
                            icon: "widgets",
                            children: [
                                {
                                    label: "A division",
                                    icon: "admin_panel_settings",
                                },
                                {
                                    label: "A division",
                                    icon: "admin_panel_settings",
                                },
                                {
                                    label: "A division",
                                    icon: "admin_panel_settings",
                                },
                            ],
                        },
                    ],
                },
            ],
            /* FIXED TOOLBAR */
            basic: false,
            fixed: false,
        };
    },
    methods: {
        d_Leader() {
            this.$q.dialog({
                title: "Leader",
                message:
                    "Leader menyangkut kepemimpinan dari sebuah organisasi atau perusahaan, seperti halnya CEO/Ketua dan fitur ini hanya bisa diisi oleh 2 user saja contoh: pemimpin dan wakilnya",
                avatar: "apartmen",
                persistent: true,
            });
        },
        d_Stakeholder() {
            this.$q.dialog({
                title: "Stakeholder",
                message:
                    "Stakeholder menyangkut orang berkepentingan di perusahaan/organisasi dan bisa diberi batasan sendiri",
                persistent: true,
            });
        },
        d_Division() {
            this.$q.dialog({
                title: "Division",
                message:
                    "Divisi, bisa dibuat berdasarkan nama, fungsionalitas, dan dari segi jumlah akan diberi kebebasan untuk menambahkannya",
                persistent: true,
            });
        },
    },
    // USING AXIOS
    mounted() {
        axios.get('http://127.0.0.1:8000/api/test', {
            //   headers: {
            //     'Access-Control-Allow-Origin': 'no-CORS'
            //   }
            }).then( function(data) {
            console.log(data);
        });
        // fetch('https://randomuser.me/api/', {
        //     mode: 'no-cors'
        // })
        //     .then(res => res.json())
        //     .then(data => console.log(data))
    },
};
</script>

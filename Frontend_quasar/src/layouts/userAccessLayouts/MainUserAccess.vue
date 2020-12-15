<template>
    <div class="q-pa-md">
    	 <q-layout view="hHh Lpr lff" >
             <q-header elevated class="bg-white">  <!--bg-teal-14 -->

                <q-toolbar>
                    <q-btn
                        flat
                        dense
                        icon="home"
                        style="color: black"
                    />
                    <q-toolbar-title class="text-grey-10 text-bold absolute-center">
                        Leadership access
                    </q-toolbar-title>
                    <div class="absolute-right q-pt-sm q-pr-md"> 
                        <q-btn icon="add" flat round dense style="color: black"/>
                    </div> 
                </q-toolbar>
                
            </q-header>

            <q-page-container>
                <router-view />
            </q-page-container>
        </q-layout>
    </div>
</template>

<script>

export default {
    name: "MainUserAccess",
    data() {
        return {
            tab:'assignment',
        }
    }
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

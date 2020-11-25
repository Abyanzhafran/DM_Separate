<template>
    <q-item exact clickable v-ripple :to='link' @click="action">
        <q-item-section v-if="icon" avatar>
            <q-icon :name="icon" />
        </q-item-section>

        <q-item-section>
            <q-item-label>
                {{ caption }}
            </q-item-label>
        </q-item-section>
    </q-item>
</template>

<script>
export default {
    name: 'CustomLink',
    props: {
        caption: {
            type: String,
            default: "",
        },

        link: {
            type: String,
            default: "",
        },

        icon: {
            type: String,
            default: "",
        },
        
        action: {
            type: Function,
            default: () => { return; }
        }
    },
};
</script>


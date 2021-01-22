<template>
    <q-editor
      :value="value" @input="$emit('input', $event)"
      :definitions="{
        save: {
          tip: 'Save your work',
          icon: 'save',
          label: 'Save',
          handler: saveWork
        },
        upload: {
          tip: 'Upload to cloud',
          icon: 'cloud_upload',
          label: 'Upload',
          handler: uploadIt
        }
      }"
      :toolbar="[
        ['bold', 'italic', 'strike', 'underline'],
        ['upload', 'save']
      ]"
    />
</template>

<script>
import { event, uid } from 'quasar';

export default {
    name: 'Editor',
    editor: 'Write Something',
    props: {
      value: {
        type: String,
        required: true,
        editor: 'Write something'
      },
    },
    data: () => ({
        // editor: 'Write here'
    }),
    methods: {
      // EDITOR METHODS
       saveWork () {
          this.$q.notify({
            message: 'Saved your text to local storage',
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done'
          })
        },
        uploadIt () {
          this.$q.notify({
            message: 'Server unavailable. Check connectivity.',
            color: 'red-5',
            textColor: 'white',
            icon: 'warning'
          })
        }
      
    }
}
</script>
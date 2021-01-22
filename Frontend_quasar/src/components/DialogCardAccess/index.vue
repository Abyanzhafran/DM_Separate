<template>
    <q-dialog :value='value' @input="$emit('input', $event)">
      <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section>
          <div class="text-h6">Medium</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
            <div />
            <q-btn push color="primary" label="Handles click">
              <q-popup-proxy>

                <q-banner class="">
                  <Editor />
                </q-banner>

              </q-popup-proxy>
            </q-btn>
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>

<script>
import Editor from 'components/Editor.vue';
import { event, uid } from 'quasar';

export default {
    name: 'DialogCardAccess',
    // editor: 'Write Something',
    props: {
      value: {
        type: Boolean
      }
    },
    data: () => ({
      medium: false
    }),
    components: {
      Editor
    }
}
</script>
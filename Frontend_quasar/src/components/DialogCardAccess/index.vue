<template>
    <q-dialog :value='value' @input="$emit('input', $event)">
      <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section>
          <div class="text-h6">Task Name</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
            <div class='q-mt-md q-mb-sm' style="font-size: 12pt">
              <q-icon class='q-mb-sm' name='description' size='sm' />
              Description
            </div>

            <!-- EDITOR COMPONENT -->
            <Editor v-model='editor' />

            <div class='q-mt-lg q-mb-sm' style="font-size: 12pt">
              <q-icon class='q-mb-sm' name='attachment' size='sm' />
              Attachment
            </div>
            <!-- <q-btn outline class='text-primary' icon='add' label='add or create' /> -->
             <q-btn-dropdown outline class='text-primary' icon='add' label='add or create'>
              <q-list>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>
                      <q-icon class='q-mr-md' name='link' size='sm' />
                        Link
                    </q-item-label> 
                  </q-item-section>
                </q-item>
        
                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>
                      <q-icon class='q-mr-md' name='attach_file' size='sm' />
                        File
                    </q-item-label> 
                  </q-item-section>
                </q-item>
                
              </q-list>
             </q-btn-dropdown>
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>

<script>
import Editor from 'components/DialogCardAccess/Editor.vue';
import { event, uid } from 'quasar';

export default {
    name: 'DialogCardAccess',
    props: {
      value: {
        type: Boolean
      }
    },
    data: () => ({
      medium: false,
      editor: 'Write Here....',
    }),
    components: {
      Editor
    }
}
</script>

<style lang="css">
  .cus-editor {
    height: 230px ;
    width: 535px ;
  }
  .cus-text-color {
    font-display: blue;
  }
</style>
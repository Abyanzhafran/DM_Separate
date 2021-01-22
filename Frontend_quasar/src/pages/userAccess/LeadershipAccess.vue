<template>
  
    <div class="row q-pt-lg justify-left">

      <div>
        <q-card flat bordered class="my-card cus-card q-ml-sm">
         <q-linear-progress size="15px" :value="progress" />  
          <q-card-section>
            <div class="q-pb-md cus-list">Current Project</div>
            <q-card class="my-card q-mb-sm" v-for='count in 2' :key='count'>
              <q-card-section class="bg-white">
                <div class="text-h6">Our Changing Planet</div>
                <div class="text-subtitle2">by John wick</div>
              </q-card-section>
            </q-card>
          </q-card-section>
        </q-card>
      </div>

      <div>
        <q-card flat bordered class="my-card cus-card q-ml-sm">
         <q-linear-progress size="15px" :value="progress" color="warning"/>  
          <q-card-section>
            <div class="q-pb-md cus-list">Up Next</div>
            <q-card class="my-card q-mb-sm" v-for='count in 3' :key='count'>
              <q-card-section class="bg-white">
                <div class="text-h6">Our Changing Planet</div>
                <div class="text-subtitle2">by John wick</div>
              </q-card-section>
            </q-card>
          </q-card-section>
        </q-card>
      </div>

      <div>
        <q-card flat bordered class="my-card cus-card q-ml-sm">
         <q-linear-progress size="15px" :value="progress" color="red"/>  
            <q-card-section>
              <div class="q-pb-none cus-list">
                Urgent
                <q-btn flat class="float-right text-bold"> 7.30PM</q-btn>
              </div>
            </q-card-section>

            <div class="scroll oveflow-hidden" style="max-height: 470px; max-width: 258px">
              <q-card-section>
                <q-card class="my-card q-mb-sm" v-for='listUrgent in listUrgents' :key='listUrgent.id'>
                  <q-card-section class="bg-white">
                      <div class="text-h6">Our Changing Planet</div>
                      <div class="text-subtitle2">by John wick</div>
                  </q-card-section>
                </q-card>
                <q-btn flat icon='add' label='Add Card' @click='addCardUrgent' />
              </q-card-section>
            </div>
        </q-card>
      </div> 

      <div>
        <q-card flat bordered class="my-card cus-card q-ml-sm">
         <q-linear-progress size="15px" :value="progress" color="green"/>  
            <q-card-section>
              <div class="q-pb-none cus-list">
                Done
                <q-btn flat class="float-right text-bold"> 7.30PM</q-btn>
              </div>
            </q-card-section>

            <div class="scroll oveflow-hidden" style="max-height: 470px; max-width: 258px">
              <q-card-section>
                <q-card class="my-card q-mb-sm" v-for='listDone in listDones' :key='listDone.id'>
                  <q-card-section class="bg-white">
                      <div class="text-h6">Our Changing Planet</div>
                      <div class="text-subtitle2">by John wick</div>
                  </q-card-section>
                </q-card>
                <q-btn flat icon='add' label='Add Card' @click='addCardDone' />
              </q-card-section>
            </div>
        </q-card>
      </div> 
      
    </div>
  
</template>

<script>
import { uid, scroll } from 'quasar';
const { getScrollPosition, setScrollPosition } = scroll

export default {
  name: 'PageIndex',
  data: () => ({
      progress: 1.0,

      listDones: [
        {
          id: uid()
        }
      ],
      listUrgents: [
        {
          id: uid()
        }
      ]

  }),
  methods: {
      addCardDone() {
        this.listDones.push({
          id: uid()
        });
      },
      addCardUrgent() {
        this.listUrgents.push({
          id: uid()
        });
      }
  }
}
</script>

<style lang="css">
  .cus-card {
    background-color: lightgrey;
  }

  .cus-list {
    font-size: 18px;
    font-weight: 500;
    max-height: 500px;
  }
  /* Styling SCROLL */
  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888; 
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
</style>

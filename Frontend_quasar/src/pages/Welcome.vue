<template>
  <q-page class="flex flex-center">

    <q-card class="my-card" style="width: 450px; height: 460px">
      <q-linear-progress indeterminate color="primary" class="q-mb-sm" />
      <q-card-section>
        <div class="text-center">

          <img src="~assets/Bersamabisa_Logo.png" style="width: 90px">
        </div>
        <p class="q-pt-sm text-center" style="font-size: 18pt">Welcome</p>
        <q-input class="q-pa-md q-pb-lg q-px-md" outlined v-model="text" label="Password">
          <template v-slot:append>
            <q-icon name="visibility" />
          </template>
        </q-input>
        
        <div>
          <a href="#" class="float-left q-pt-lg text-bold" style="text-decoration: none">
            Forgot Password ? 
          </a>
          <div class="q-pt-lg float-right">
            <q-btn color="primary" label="Login" to="/" />
          </div>
        </div>

      </q-card-section>
    </q-card>
    
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>

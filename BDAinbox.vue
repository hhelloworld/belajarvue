<template>
  <v-app fluid dark>      
    <v-layout class="mx-7 my-12">
      <v-navigation-drawer class="py-16" v-model="drawer" :rail="rail" permanent floating @click="rail =false"
      >
        <v-list-item :prepend-avatar="getImageInbox1()" nav>
          <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>


        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-email-outline" title="Surat Masuk" value="inbox"></v-list-item>
          <v-list-item prepend-icon="mdi-message-outline" title="Pesan" value="message"></v-list-item>
          <v-list-item prepend-icon="mdi-email-edit-outline" title="Draf" value="draf"></v-list-item>
          <v-list-item prepend-icon="mdi-calendar-blank-outline" title="Kalender dan Peta" value="calendarMap"></v-list-item>
          <v-list-item prepend-icon="mdi-email-fast-outline" title="Surat Terkirim" value="users"></v-list-item>

        </v-list>
      </v-navigation-drawer>
      <v-main>
        
      </v-main>
    </v-layout>
  </v-app>
</template>

<script>
  import SvgIcon from '@jamescoyle/vue-icon'  
  import { mdiInformationOutline } from '@mdi/js';

export default {
    name: 'BDAinbox',
    Components: {
      SvgIcon
    },
    data(){
      return{
        drawer: true,
        items: [
          { title: 'Surat Masuk', icon: 'mdi-email-outline' },
          { title: 'Draf', icon: 'mdi-noteEdit-outline' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ],
        rail: true,
        path: mdiInformationOutline,

      }
    },
    methods: {
      getImageInbox1() {
        return require("../assets/s1.png");
      },
      getImageInbox2() {
        return require("../assets/bda.png");
      },
      getImageInbox3() {
        return require("../assets/telkom2.png");
      }, 
    }
};
</script>

<style type="text/css">

@media (max-device-width: 736px){
} 



</style>